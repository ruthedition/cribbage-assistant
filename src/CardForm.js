import CardInput from './CardInput'

const CardForm = ({updatePairs}) => {

  return(
    <div style={{padding:"5rem"}}>
        < CardInput cardNumber="1" updatePairs={updatePairs} />
        < CardInput cardNumber="2" updatePairs={updatePairs} />
        < CardInput cardNumber="3" updatePairs={updatePairs} />
        < CardInput cardNumber="4" updatePairs={updatePairs} />
        < CardInput cardNumber="5" updatePairs={updatePairs} />
        < CardInput cardNumber="6" updatePairs={updatePairs} />
    </div>
  )
}

export default CardForm