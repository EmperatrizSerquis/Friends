import { createSlice } from '@reduxjs/toolkit'
import dataCategories from '../../data/categories'
import dataFriends from '../../data/friends'

const initialState = {
  categories: dataCategories,
  friends: dataFriends,
  friendsFilteredByCategory: [],
  categorySelected: null,
  friendIdSelected: null,
}

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {state.categorySelected = action.payload},
    setFriendIdSelected: (state, action) => {state.friendIdSelected = action.payload},
  },
})

export const { setCategorySelected, setFriendIdSelected } = friendsSlice.actions

export default friendsSlice.reducer
