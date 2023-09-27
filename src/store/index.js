import { configureStore } from '@reduxjs/toolkit'
import dateSlice from '../features/dateapp/dateSlice'
import friendsSlice from '../features/friends/friendsSlice'

export const store = configureStore({
  reducer: {
    dateapp: dateSlice,
    friends: friendsSlice,
  },
})
