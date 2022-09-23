import {configureStore} from "@reduxjs/toolkit"
import CardListSlice from "../components/CardList/CardListSlice";

const store = configureStore({
  reducer: {
    Cardlist: CardListSlice
  }
});

export default store; 