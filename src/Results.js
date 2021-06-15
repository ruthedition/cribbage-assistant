import { useEffect, useState } from "react"

const Results = ({cardPairs}) => {

  let [bestPairs, setBestPairs] = useState()
  let [points, setPoints] = useState()

  const findSuit = (card) => {
    return card.split("").pop()
  }
   
  const findNumber = (card) => {
    if(card.length == 3){
        return parseInt(card.slice(0,2))
      }else{
        return parseInt(card.slice(0,1))
      }
  }
  
  const parseCombos = (arr) =>{
    let combos = {
      pairs: findPairs(arr),
      runs: findRuns(arr),
      combo15: addCards(arr),
      flush: findFlush(arr)
    }
  }

  const findPairs = (arr) =>{
    let pairs = [[]]
    arr.forEach((a) => {
      let currentPair = pairs[pairs.length -1]
      if(currentPair.length === 0 || findNumber(currentPair[0]) == findNumber(a)){
        currentPair.push(a)
      }else{
        pairs.push([a])
      }
    })
    return pairs.filter(pair => pair.length > 1)
  }

  const findRuns = (arr) =>{
    let runs = [[]]
    arr.forEach((a) => {
      let currentRun = runs[runs.length - 1]
      if(currentRun.length === 0 || findNumber(a) - findNumber(currentRun[currentRun.length -1]) <= 1){
        currentRun.push(a)
      }else{
        runs.push([a])
      }
    })
    return runs.filter(run => run.length > 2)
  }

  const adjustPoints = (num) => {
    return num >=10 ? 10 : num
  }

  const addCards = (arr) => {
    let combo15 = [[]]
    let sum = 0

    let possibleCombo = arr.reduce((acc, a) => {
      return acc + adjustPoints(findNumber(a))
    },0)

    if(possibleCombo > 15){
      arr.forEach((a) => {
        let currentCombo = combo15[combo15.length - 1]
        if(currentCombo.length === 0){
          currentCombo.push(a)
          sum = adjustPoints(findNumber(a))
        }else if(sum < 15){
          currentCombo.push(a)
          sum += adjustPoints(findNumber(a))
        }else{
          combo15.push([a])
          sum = adjustPoints(findNumber(a))
        }
      })
    }
    return combo15
  }

  const findFlush = (arr) => {
    let suits = {H:0, D:0, S:0, C:0}
    arr.forEach(a => suits[findSuit(a)]++)
    let suit = Object.keys(suits).find(suit => suits[suit] == 4)
    
    return arr.filter(a => findSuit(a) === suit)
  }

  const calculatePoints = () => {
    let sorted = cardPairs.sort((a,b) => findNumber(a) - findNumber(b))
    parseCombos(sorted)
  }

  

  useEffect(calculatePoints, [cardPairs])

  return(
    <div>
      The best hand is {cardPairs} and is worth {points}"
    </div>
  )
}

export default Results