import './App.css';
import CardForm from './CardForm';
import { useState } from 'react'
import Results from './Results'

function App() {

  let [cardPairs, setCardPairs] = useState({})

  const updatePairs = (cardNumber, cardPair) => {
    setCardPairs((cardPairs) => {
     return cardPairs[cardNumber] === cardPair ? cardPairs : {...cardPairs, [cardNumber]: cardPair }
    })
  }

  const renderResult = () => {

    if(Object.values(cardPairs).length === 6){
      return <Results cardPairs={Object.values(cardPairs)}/>
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
