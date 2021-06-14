const CardValueSelection = ({handleChange, selected}) => {
  return(
    <div>
      <select value={selected} onChange={(e) => handleChange(e.target.value)}>
        <option value="0" disabled>Select Card Number</option>
        <option value="1">Ace</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">Jack</option>
        <option value="12">Queen</option>
        <option value="13">King</option>
      </select>
    </div>
  )
}

export default CardValueSelection;