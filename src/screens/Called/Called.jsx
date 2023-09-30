import { FlatList, Pressable, Text, View  } from 'react-native'
import  { Calendar }  from '../../components'
import React from 'react'
import styles from './CalledStyle'

const Called = () => {
  return (
    <View styles={styles.container}>   
      <Calendar/>
      <Text styles={styles.name}>Juan</Text>
    </View>
  )
}

export default Called