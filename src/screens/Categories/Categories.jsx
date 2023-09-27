import {FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './CategorieStyle'
import allCategories from '../../data/categories'
import { useDispatch } from "react-redux"
import { setCategorySelected } from '../../features/friends/friendsSlice'
import { CategoryItem } from '../../components'

const Categories = ({ category, navigation }) => {

  return (
    
    <View style={styles.container}>
    
    <View style={styles.listContainer}>
      <FlatList
        data={allCategories}
        renderItem={({ item }) => (
          <CategoryItem category={item}  navigation={navigation} />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  </View>
  )
}

export default Categories
