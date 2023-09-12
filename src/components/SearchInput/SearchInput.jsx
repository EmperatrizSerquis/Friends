import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './SearchInputStyle'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search friend"
      />
      <Pressable onPress={search}>
        <Ionicons name="md-search-sharp" size={24} color="#C284E8" />
      </Pressable>
      <Pressable onPress={clearInput}>
        <Ionicons name="md-close-circle-sharp" size={24} color="#C284E8" />
      </Pressable>
    </View>
  )
}

export default SearchInput
