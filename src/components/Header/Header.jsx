import { Link } from "react-router-dom";
const Header = (props) => {
  return ( 
    <header className="header">
      <h1>E-wallet</h1>
      
      <button className="addCardButton">
        {
          props.page === "Add Card" ? <Link to="/addcard">Add Card</Link> : <Link to="/">Your Cards</Link>
        }
      </button>
    </header>
    
  )
}

export default Header;