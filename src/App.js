import './App.css';
import CardForm from './CardForm';
import { useState } from 'react'
import Results from './Results'

function App() {

  let [cardPairs, setCardPairs] = useState(new Array(6))

  const updatePairs = (cardNumber, cardPair) => {
    let newCardPairs = [...cardPairs]
    newCardPairs[cardNumber-1] = cardPair
    setCardPairs(newCardPairs)
  }

  const renderResult = () => {
    if(!cardPairs.includes(undefined)){
      return <Results/>
    }
  }
  
  return (
    <div>
      <h1 className="title">
        Welcome to the Cribbage Assistant
      </h1>
      <CardForm updatePairs={updatePairs}/>
      {renderResult()}
    </div>
  );
}

export default App;
