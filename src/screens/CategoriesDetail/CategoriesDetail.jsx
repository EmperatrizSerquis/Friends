import { Image, Text, View, TouchableOpacity, Button } from 'react-native'
import React  from 'react'

import styles from './CategoriesDetailStyles'

const CategoriesDetail = ({ navigation, route }) => {
    const { category } = route.params
  return (

      <View style={styles.container}>     
        <View style={styles.contentContainer}>
            <Image source={{uri: category.picture}} style={styles.image}/>
            <Text style={styles.text}> {category.title} </Text>
            <Text style={styles.description}> {category.description} </Text>

            <View style={styles.action}>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.paymentsButton} >
                <Text style={styles.textPayButton}>Categories</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    
  )
}

export default CategoriesDetail