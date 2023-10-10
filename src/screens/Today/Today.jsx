import { Text, View } from 'react-native'
import  { Contactos }  from '../../components'
import  { NewPicker }  from '../../components'
import React from 'react'
import styles from './TodayStyle'


const Today = () => {
  return (
    <View styles={styles.container}>
      <NewPicker/>
      <Text styles={styles.name}>Agenda</Text>
      <Contactos/>
      
    </View>
  )
}

export default Today