import { useState } from 'react'
import CardInput from './CardInput'

const CardForm = () => {

  let [cardPairs, setCardPairs] = useState(new Array(6))

  const updatePairs = (cardNumber, cardPair) => {
    let newCardPairs = cardPairs
    newCardPairs[cardNumber-1] = cardPair
    setCardPairs(newCardPairs)
  }

  const handleSubmit= () => {
    console.log(cardPairs)
  }

  return(
    <div style={{padding:"5rem"}}>
        < CardInput cardNumber="1" updatePairs={updatePairs} />
        < CardInput cardNumber="2" updatePairs={updatePairs} />
        < CardInput cardNumber="3" updatePairs={updatePairs} />
        < CardInput cardNumber="4" updatePairs={updatePairs} />
        < CardInput cardNumber="5" updatePairs={updatePairs} />
        < CardInput cardNumber="6" updatePairs={updatePairs} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CardForm