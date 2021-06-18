import { useEffect, useState } from "react"

const Results = ({ cardPairs }) => {

  let [bestCards, setBestCards] = useState([])
  let [points, setPoints] = useState(0)


  useEffect(() => {
    const getBestCards = () => {
      fetch('http://localhost:4567/besthand', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cards: cardPairs})
      }).then(response => {
        console.log(response)
        return response.json();
      }).then(data => {
        setBestCards(data.hand)
        setPoints(data.points)
      })
    }
    getBestCards()
  },[cardPairs])

  return (
    <div style={{ paddingTop:"5rem", paddingLeft:"30rem", paddingRight:"10rem"}} >

      <h3>
      The best hand is [{bestCards.join(", ")}] and is worth {points}.
      </h3> 
    </div>
  )
}

export default Results