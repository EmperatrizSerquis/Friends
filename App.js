import { Home, Friends } from './src/screens'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')


  if (!fontsLoaded) {
    return null
  }

  return categorySelected ? 
     (
    <Friends
      category={categorySelected}
    />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}
