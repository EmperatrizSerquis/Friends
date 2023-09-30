import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onChangeDate: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { onChangeDate } = calendarSlice.actions

export default calendarSlice.reducer