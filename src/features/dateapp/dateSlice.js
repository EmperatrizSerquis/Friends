import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: new Date(),
}

export const dateSlice = createSlice({
  name: 'dateapp',
  initialState,
  reducers: {
    onChange: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { onChange } = dateSlice.actions

export default dateSlice.reducer