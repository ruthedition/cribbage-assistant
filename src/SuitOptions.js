const SuitOptions = ({cardNumber, handleChange}) =>{

  return(
    <div>
        <div className="radio" onChange={(e)=> handleChange(e.target.value)}>
          <label className="club">
            <input type="radio" name={`suit-${cardNumber}`} value="C"/>
            ♣️
          </label>
          <label className="diamond">
            <input type="radio" name={`suit-${cardNumber}`} value="D"/>
            ♦
          </label>
          <label className="heart">
            <input type="radio" name={`suit-${cardNumber}`} value="H"/>
            ♥
          </label>
          <label className="spade">
            <input type="radio" name={`suit-${cardNumber}`} value="S"/>
            ♠
          </label>
        </div>
    </div>
  )
}

export default SuitOptions