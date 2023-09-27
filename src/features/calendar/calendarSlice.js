import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: new Date(),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onChange: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { onChange } = calendarSlice.actions

export default calendarSlice.reducer
