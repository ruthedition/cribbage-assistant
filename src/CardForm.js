import CardValueSection from "./CardValueSelection";
import SuitOptions from "./SuitOptions"

const CardForm = () => {
  return(
    <div style={{padding:"5rem"}}>
      <form onSubmit>
         Card 1:
         <div className="formInput" >
          <CardValueSection/> <SuitOptions/>
        </div>
          Card 2:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions/>
        </div>
          Card 3:
        <div className="formInput" >
           <CardValueSection/> <SuitOptions/>
        </div>
        Card 4:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions/>
        </div>
        Card 5:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions/>
        </div>
        Card 6:
        <div className="formInput" >
          <CardValueSection/> <SuitOptions/>
        </div>
      </form>
    </div>
  )
}

export default CardForm;