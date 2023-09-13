import { Pressable, Text } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategoryItemStyle'

const CategoryItem = ({ category, setCategorySelected }) => {

  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{(category.toUpperCase().replace("-", " "))}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
