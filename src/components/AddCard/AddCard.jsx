import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../CardList/CardListSlice";
import { useNavigate } from "react-router-dom";  
import Card from "../Card/Card";
import { useState } from "react";


const AddCard = () => {
const {user, latestId} = useSelector((state) => state.Cardlist)
const navigate = useNavigate()

const [bank, setBank] = useState("Your bank")
const [number, setNumber] = useState("XXXX XXXX XXXX XXXX")
const [month, setMonth] = useState("XX")
const [year, setYear] = useState("XX")
const [ccv, setCvv] = useState("XXX")

  const dispatch = useDispatch()
  const handleAddCard = (e) => {
    e.preventDefault()
    let bank = document.getElementById('cardbank').value
    let number = document.getElementById('cardnumber').value
    let month = document.getElementById('cardmonth').value
    let year = document.getElementById('cardyear').value
    let ccv = document.getElementById('cardccv').value

     dispatch(addCard({
      bank: bank,
      cardNumber: number,
      cardholder: user,
      expireMonth: month,
      expireYear: year,
      CCV: ccv,
      id: latestId+1
     }))
     if(number.length !== 16){
      alert("The cardnumber that you have enterd is not correct!")
     } else {
       navigate('/')
     }
  } 

  let card = {
    bank: bank, 
    cardNumber: number.match(/.{1,4}/g), 
    expireMonth: month,
    expireYear: year, 
    CCV: ccv
  }

  const handleBank = () => {
    let inputValue = document.getElementById('cardbank').value
    if(inputValue === "null"){
      document.getElementById('cardbank').classList.add("error")
    } else {
      document.getElementById('cardbank').classList.remove("error")
      setBank(inputValue)
    }
  }
  const handleNumber = () => {
    let inputValue = document.getElementById('cardnumber').value
    if(inputValue.length !== 16){
      document.getElementById('cardnumber').classList.add('error')
      setNumber(inputValue)
    } else {
      document.getElementById('cardnumber').classList.remove('error')
      setNumber(inputValue)
    }

  }
  const handleMonth = () => {
    let inputValue = document.getElementById('cardmonth').value
    if(inputValue > 12){
      document.getElementById('cardmonth').classList.add("error")
    } else {
      document.getElementById('cardmonth').classList.remove("error")
      setMonth(inputValue)
    }
  }
  const handleYear = () => {
    let inputValue = document.getElementById('cardyear').value
    if(inputValue.length > 2) {
      document.getElementById('cardyear').classList.add('error')
    } else {
      document.getElementById('cardyear').classList.remove('error')
      setYear(inputValue)
    }
  }
  const handleCCV = () => {
    let inputValue = document.getElementById('cardccv').value
    if(inputValue.length > 3) {
      document.getElementById('cardccv').classList.add('error')
    } else {
      document.getElementById('cardccv').classList.remove('error')
      setCvv(inputValue)
    }
  }


  return ( 
    <>
    <div className="wrapper">
    <h2>Your new card</h2>
      <Card user={user} card={card}/>
      <h2>Add a new card</h2>
    <form className="addCard">
      <label htmlFor="cardbank">Bank name:</label>
      <select name="bank" id="cardbank" onChange={() => {handleBank()}}>
        <option value="null">Select a bank</option>   
        <option value="Swedbank">Swedbank</option>
        <option value="SEB">SEB</option>
        <option value="Nordea">Nordea</option>

      </select>
      <label htmlFor="cardnumber">Cardnumber: </label>
      <input type="text" id="cardnumber" onChange={() => {handleNumber()}}/>
      <div className="addcarddetails">
      <label htmlFor="cardmonth">Expire month: </label>
      <input type="text" id="cardmonth" onChange={() => {handleMonth()}}/>
      <label htmlFor="cardyear" >Expire year: </label>
      <input type="text" id="cardyear" onChange={() => {handleYear()}} />
      <label htmlFor="cardmonth">CCV: </label>
      <input type="text" id="cardccv" onChange={() => {handleCCV()}}  />
      </div>
      <button className="addbtn" onClick={handleAddCard}>Add Card</button>
    </form>
    </div>
    
    </>
  )
}

export default AddCard;