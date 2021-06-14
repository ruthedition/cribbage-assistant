import CardValueSection from './CardValueSelection'
import SuitOptions from './SuitOptions'
import {useState} from 'react'

const CardForm = () => {

  let [cardValues, setCardValues] = useState([])

  return(
    <div style={{padding:"5rem"}}>
      <form onSubmit>
         Card 1:
         <div className="formInput" >
          <CardValueSection/> <SuitOptions cardNumber="1"/>
        </div>
          Card 2:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions cardNumber="2"/>
        </div>
          Card 3:
        <div className="formInput" >
           <CardValueSection/> <SuitOptions cardNumber="3"/>
        </div>
        Card 4:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions cardNumber="4"/>
        </div>
        Card 5:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions cardNumber="5"/>
        </div>
        Card 6:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions cardNumber="6"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CardForm