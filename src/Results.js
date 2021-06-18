import { useEffect, useState } from "react"

const Results = ({ cardPairs }) => {

  let [bestCards, setBestCards] = useState([])
  let [points, setPoints] = useState(0)

  useEffect(findBestCards, [cardPairs])

  return (
    <div style={{ paddingTop:"5rem", paddingLeft:"30rem", paddingRight:"10rem"}} >

      <h3>
      The best hand is [{bestCards.join(", ")}] and is worth {points}.
      </h3> 
    </div>
  )
}

export default Results