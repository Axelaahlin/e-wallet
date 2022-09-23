import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";

import { getUser } from "../components/CardList/CardListSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  
return (
  <>
  <Header page="Add Card"/>
  <CardList/>
  </>
)
}

export default Home ;