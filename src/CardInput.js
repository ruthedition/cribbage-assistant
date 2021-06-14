import SuitOptions from './SuitOptions'
import CardValueSelection from './CardValueSelection'
import {useState} from 'react'

const CardInput = ({cardNumber}) => {

  let [cardValue, setCardValue] = useState(null)
  let [cardSuit, setCardSuit] = useState(null)

  return(
    <div>
      Card {cardNumber}:
       <div className="formInput" >
        <CardValueSelection handleChange={setCardValue} selected={cardValue}/> <SuitOptions cardNumber={cardNumber} handleChange={setCardSuit}/>
      </div>
    </div>
  )
}

export default CardInput