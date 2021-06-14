import CardInput from './CardInput'

const CardForm = () => {

  return(
    <div style={{padding:"5rem"}}>
      <form onSubmit>
        <CardInput cardNumber="1"/>
        <CardInput cardNumber="2"/>
        <CardInput cardNumber="3"/>
        <CardInput cardNumber="4"/>
        <CardInput cardNumber="5"/>
        <CardInput cardNumber="6"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CardForm