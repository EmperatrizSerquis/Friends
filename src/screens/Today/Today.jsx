import { Text, View } from 'react-native'
import  { Calendar }  from '../../components'
import React from 'react'
import styles from './TodayStyle'


const Today = () => {
  return (
    <View styles={styles.container}>
      <Calendar/>
      <Text styles={styles.name}>Juan</Text>
    </View>
  )
}

export default Today