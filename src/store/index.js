import { configureStore } from '@reduxjs/toolkit'
import calendarSlice from '../features/calendar/calendarSlice'
import friendsSlice from '../features/friends/friendsSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    friends: friendsSlice,
  },
})
