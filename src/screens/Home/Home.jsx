import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import { Header } from '../../components'
import React from 'react'
import styles from './HomeStyle'
import {  useSelector } from 'react-redux'

const image = { uri: "https://cdn.pixabay.com/photo/2015/12/19/12/55/cartoon-1099728_1280.jpg" };

const Home = ({ navigation }) => {
  const calendar = useSelector(state => state.calendar.value)
  return (
    <View style={styles.container}>

    <ImageBackground source={image} style={styles.image}>
    
      <Text style={styles.textContainer}>FRIENDS APP  !</Text>
      <Text style={styles.text}>DID YOU REMEMBER THAT CALL?</Text>
      <View style={styles.action}>
    
        <TouchableOpacity onPress={() => navigation.navigate('Today')} style={styles.categoriesButton} >
            <Text style={styles.textCatButton}>Today </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Friends')} style={styles.friendsButton} >
          <Text style={styles.textFriendButton}>Friends</Text>
        </TouchableOpacity>
        <Text style={styles.textFriendButton}>Next Call: </Text>
        <Text style={styles.textFriendButton}>{ calendar } </Text>
     
      </View>
    </ImageBackground>
   
  </View>
  )
}

export default Home
