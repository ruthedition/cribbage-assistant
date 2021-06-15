import { useEffect, useState } from "react"

const Results = ({cardPairs}) => {

  let [bestPairs, setBestPairs] = useState()
  let [points, setPoints] = useState()

  const findNumber = (card) => {
    if(card.length == 3){
        return card.slice(0,2)
      }else{
        return card.slice(0,1)
      }
  }
  
  const parseCombos = (arr) =>{
    let combos = {
      pairs: findPairs(arr)
    }
    console.log(combos.combo15)
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

  const calculatePoints = () => {
    console.log(cardPairs)
    let sorted = cardPairs.sort((a,b) => { return findNumber(a) - findNumber(b)} )
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