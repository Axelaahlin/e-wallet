import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("CardList/getUser", async () => {
  return fetch ("https://randomuser.me/api/").then((res) => res.json())
})

const CardListSlice = createSlice({
  name: "cardList", 
  initialState: {
    cards: [
    ], 
    activeCard:[{
      bank: "Swedbank",
      cardNumber:  "1000 0000 0000 0000", 
      cardholder: "Axel Åhlin Andersson",
      expireMonth: "00",
      expireYear: "00",
      CCV: "000",
      Id: 1
    }],
    latestId: 1,
    user: null
  }, 
  reducers: {
    addCard: (state, action) => {
      console.log(action.payload)
      state.cards.push(action.payload)
      state.latestId += 1
    }, 
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.Id !== action.payload)
    }, 
    makeActive: (state, action) => {
      state.cards.push(state.activeCard[0])
      state.activeCard = null
      let newActive = state.cards.filter((card) => card.Id === action.payload)
      state.cards = state.cards.filter((card) => card.Id !== action.payload)
      state.activeCard = newActive
    }
  }, 
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.results[0]
    }
  }
})

export const {addCard, deleteCard, makeActive} =CardListSlice.actions;
export default CardListSlice.reducer; 