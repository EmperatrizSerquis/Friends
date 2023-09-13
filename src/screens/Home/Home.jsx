import { FlatList, Text, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import categories from '../../data/categories'
import styles from './HomeStyle'

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>WELCOME TO THE  APP!</Text>
       <Text style={styles.textContainer}>APP to remember calling friends or clients depending on the category every N amount of time !</Text>
      <Header title={'Friends Categories'} />
      <View style={styles.listContainer}>
      <FlatList
        data={categories}
        keyExtractor={category => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
          />
        )}
      />
      </View>
    </View>
  )
}

export default Home
