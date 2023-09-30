import { Text, View,  Pressable } from 'react-native'
import React from 'react'
import styles from './HeaderStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import DateApp from '../DateApp/DateApp'


const Header = ({ navigation, title }) => {
  return (
    <View>
      {
        title != 'Home' && (
          <>
          <View style={styles.flexContainer}>
             <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={40} color="white" />
              </Pressable>
            <Text style={styles.text}>{title}</Text>
          </View>
          <DateApp />
          </>
        )
      }
      {
        title == 'Home' && (
          <>
        <Text style={styles.text}>{title}</Text> 
        <DateApp /> 
        </>
        )
      }
      
      
          
    </View>
  )
}

export default Header