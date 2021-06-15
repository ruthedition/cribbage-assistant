import { useEffect, useState } from "react"

const Results = ({cardPairs}) => {

  let [bestPairs, setBestPairs] = useState()
  let [points, setPoints] = useState()

  const calculatePoints = () => {
    console.log(cardPairs)
  }

  useEffect(calculatePoints,[cardPairs])

  

  return(
    <div>
      The best hand is {bestPairs} and is worth {points}"
    </div>
  )
}

export default Results