import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'userLogged',
  updatedAt: Date.now().toLocaleString(),
  total: 50,
  items: [],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const isInContact = state.items.find(
        item => item.id === action.payload.id
      )
      if (isInContact) {
        const itemsUpdated = state.items.map(item => {
          if (item.id === action.payload.id) {
            item.nextDate = action.payload.nextDate
            return item
          }
          return item
        })
        
        
        return (state = {
          ...state,
          items: itemsUpdated,
          updatedAt: new Date().toLocaleString(),
        })
      } else {
        state.items.push(action.payload)
       
        return (state = {
          ...state,
          updatedAt: new Date().toLocaleString(),
        })
      }
    },
    removeContact: (state, action) => {},
  },
})

export const { addContact, removeContact } = contactsSlice.actions

export default contactsSlice.reducer
