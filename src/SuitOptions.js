const SuitOptions = () =>{

  return(
    <div>
        <div className="radio">
          <label className="club">
            <input type="radio" value="C"/>
            ♣️
          </label>
          <label className="diamond">
            <input type="radio" value="D"/>
            ♦
          </label>
          <label className="heart">
            <input type="radio" value="H"/>
            ♥
          </label>
          <label className="spade">
            <input type="radio" value="S"/>
            ♠
          </label>
        </div>
    </div>
  )
}

export default SuitOptions