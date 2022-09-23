import { useSelector } from "react-redux"
import Card from "../Card/Card"


const CardList  = () => {
  const {cards, user, activeCard} = useSelector((state) => state.Cardlist)
  return (
    <>
      <h2>Your active card</h2>
      {activeCard.map((card, i) => {
        return(
          <Card card={card} user={user} key={i} myState={false}/>
        )
      })}
      <h2>{cards.length !== 0 && "Your cards"}</h2>
      {
        cards.map((card, i) => {
          return(
            <Card card={card} user={user} key={i} myState={true}/>
          )
        })
      }
    </>
  )
}

export default CardList;