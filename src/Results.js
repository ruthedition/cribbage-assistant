import { useEffect, useState } from "react"

const Results = ({ cardPairs }) => {

  let [bestCards, setBestCards] = useState([])
  let [points, setPoints] = useState(0)

  const calculatePoints = (keys) => {
    let parsed = parseCombos(keys)
    let p = pointsForFlush(parsed) + pointsForPairs(parsed) + pointsForCombo15(parsed) + pointsForRuns(parsed)
    setPoints(p)
  }

  const findBestCards = () => {
    let sorted = cardPairs.sort((a, b) => findNumber(a) - findNumber(b))
    let combos = parseCombos(sorted)
    let bestOptions = comboChecker(combos)
    let topCardValues = Object.values(bestOptions).sort((a, b) => b - a).slice(0, 4)

    let keys = topCardValues.map(v => {
      let key = Object.keys(bestOptions).find(card => bestOptions[card] === v)
      delete bestOptions[key]
      return key
    }).sort((a, b) => findNumber(a) - findNumber(b))

    setBestCards(keys)
    calculatePoints(keys)
  }

  useEffect(findBestCards, [cardPairs])

  const findSuit = (card) => {
    return card.split("").pop()
  }

  const findNumber = (card) => {
    if (card.length === 3) {
      return parseInt(card.slice(0, 2))
    } else {
      return parseInt(card.slice(0, 1))
    }
  }

  const findPairs = (arr) => {
    let pairs = [[]]
    arr.forEach((a) => {
      let currentPair = pairs[pairs.length - 1]
      if (currentPair.length === 0 || findNumber(currentPair[0]) === findNumber(a)) {
        currentPair.push(a)
      } else {
        pairs.push([a])
      }
    })
    return pairs.filter(pair => pair.length > 1)
  }

  const parseCombos = (arr) => {
    return {
      pairs: findPairs(arr).flat(),
      runs: findRuns(arr).flat(),
      combo15: addCards(arr).flat(),
      flush: findFlush(arr)
    }
  }

  const findRuns = (arr) => {
    let runs = [[]]
    arr.forEach((a) => {
      let currentRun = runs[runs.length - 1]
      if (currentRun.length === 0 || findNumber(a) - findNumber(currentRun[currentRun.length - 1]) <= 1) {
        currentRun.push(a)
      } else {
        runs.push([a])
      }
    })

    let filtered = runs.filter(run => run.length > 2)

    let currentNum = 0
    let uniqueVal = 0
    filtered.forEach(a => {
      a.forEach(n => {
        if (currentNum !== findNumber(n)) {
          currentNum = findNumber(n)
          uniqueVal++
        }
      })
      if (uniqueVal < 3) {
        filtered.splice(filtered.indexOf(a), 1)
      }
    })
    return filtered
  }

  const adjustPoints = (num) => {
    return num >= 10 ? 10 : num
  }

  const addCards = (arr) => {
    let combo15 = [[]]
    let sum = 0

    let possibleCombo = arr.reduce((acc, a) => {
      return acc + adjustPoints(findNumber(a))
    }, 0)

    if (possibleCombo > 15) {
      arr.forEach((a) => {
        let currentCombo = combo15[combo15.length - 1]
        if (currentCombo.length === 0) {
          currentCombo.push(a)
          sum = adjustPoints(findNumber(a))
        } else if (sum < 15) {
          currentCombo.push(a)
          sum += adjustPoints(findNumber(a))
        } else {
          combo15.push([a])
          sum = adjustPoints(findNumber(a))
        }
      })
    }
    return combo15
  }

  const findFlush = (arr) => {
    let suits = { H: 0, D: 0, S: 0, C: 0 }
    arr.forEach(a => suits[findSuit(a)]++)
    let suit = Object.keys(suits).find(suit => suits[suit] === 4)

    return arr.filter(a => findSuit(a) === suit)
  }

  const comboChecker = (combos => {
    let bestOptions = {}

    Object.values(combos).forEach(combo => {
      combo.forEach(card => {
        if (!bestOptions[card]) {
          bestOptions[card] = 1
        } else {
          bestOptions[card]++
        }
      })
    })
    return bestOptions
  })

  const pointsForFlush = (combo) => {
    let points = 0
    if (combo.flush.length !== 0) {
      points += 4
    }
    return points
  }

  const pointsForPairs = (combo) => {
    let points = 0
    if (combo.pairs.length !== 0) {
      let nums = {}
      combo.pairs.forEach(card => {
        let n = findNumber(card)
        !nums[n] ? nums[n] = 1 : nums[n]++
      })

      Object.values(nums).forEach(num => {
        if (num === 2) {
          points += 2
        } else if (num === 3) {
          points += 6
        } else {
          points += 12
        }
      })
    }
    return points
  }

  const pointsForCombo15 = (combo) => {
    let points = 0
    if (combo.combo15.length !== 0) {

      let nums = {}

      combo.combo15.forEach(card => {
        let n = findNumber(card)
        !nums[n] ? nums[n] = 1 : nums[n]++
      })

      Object.keys(nums).forEach(num => {
        
        let total = parseInt(num)
        let diff = 15 - total
        if (nums[diff] === 2 && nums[num] === 2) {
          return points += 4
        }

        while (diff > 0) {
          if (nums[diff] && diff !== num) {
            nums[diff]--
            total = total + diff
            diff = 15 - total
            if (total === 15) {
              if (nums[num] === 2) {
                points += 4
              } else {
                points += 2
              }
            }
          } else {
            diff--
          }
        }
      })
    }
    return points
  }

  const pointsForRuns = (combo) => {
    let points = 0

    if(combo.runs.length !== 0){
      let runList = []
      combo.runs.forEach((card) => {
        let current = findNumber(card)
        if(runList.length === 0){
          runList.push(current)
        }else{
          let last = runList[runList.length -1 ]
          if(current - last === 1){
            runList.push(current)
          }
        }
      })
      if(combo.pairs.length === 2){
        points += (runList.length * 2)
      }else{
        points += runList.length
      }
    }
    return points
  }

  return (
    <div style={{ paddingTop:"5rem", paddingLeft:"30rem", paddingRight:"10rem"}} >

      <h3>
      The best hand is [{bestCards.join(", ")}] and is worth {points}.
      </h3> 
    </div>
  )
}

export default Results