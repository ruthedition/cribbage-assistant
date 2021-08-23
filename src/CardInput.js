import SuitOptions from './SuitOptions'
import CardValueSelection from './CardValueSelection'
import {useEffect, useState} from 'react'

const CardInput = ({cardNumber, updatePairs}) => {

  let [cardValue, setCardValue] = useState(0)
  let [cardSuit, setCardSuit] = useState(null)

  useEffect(() => {
    if(cardValue && cardSuit){
      updatePairs(cardNumber,`${cardValue + cardSuit}`)
    }
  })

  return(
    <div id="card">
      <span id="cardTitle"> Card {cardNumber} </span>
       <div className="formInput" >
          
            <CardValueSelection handleChange={setCardValue} 
          selected={cardValue}/>
    
          <SuitOptions cardNumber={cardNumber} 
          handleChange={setCardSuit}
        />
      </div>
    </div>
  )
}

export default CardInput