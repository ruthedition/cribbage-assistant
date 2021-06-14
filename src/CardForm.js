import SuitOptions from "./SuitOptions"

const CardForm = () => {
  return(
    <div>
      <form>
        <div style={{display:"flex"}} >
          <input type="number" value="number" placeholder="Card Number"/> <SuitOptions/>
        </div>
        
      </form>
      
    </div>
  )
}

export default CardForm;