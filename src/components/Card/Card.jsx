import { deleteCard, makeActive } from "../CardList/CardListSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"


const Card = ({card, user, myState}) => {
  const [show, setShow] = useState(myState)
  const dispatch = useDispatch()

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id))
  }

  const handleMakeActive = (id) => {
    dispatch(makeActive(id))
  }

  return(
    <div className="cardbackground">
  <div className={`Card ${card.bank}`} onClick={() => {handleMakeActive(card.Id)}}>
    <div className="bankname">
    <p>{card.bank}</p>
    {console.log(card.bank)}
    {/* <img src={`./Logos/${card.bank}`} alt={`Picture of ${card.bank} ikon`} /> */}
    </div>
    <div className="cardnumber">
    <p>{card.cardNumber}</p>
    </div>

    <div className="carddetails">
      <div className="carddatailsname">
        <p><b>{user && user.name.first.toUpperCase()}  {user && user.name.last.toUpperCase()} </b></p>
      </div>
      <div className="carddatailsdate">
        <p>{card.expireMonth}/{card.expireYear}</p>
        <p> <b>CCV</b> - {card.CCV}</p>
      </div>
    </div>
  </div>
    { show && 
      <div>
        <button onClick={() => {handleDeleteCard(card.Id)}}>Delete</button>
      </div> 
     }
     </div>
  )
}

export default Card; 