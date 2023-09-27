import { Text, View } from 'react-native'

import React from 'react'
import styles from './TodayStyle'

const Today = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.name}>Juan</Text>
    </View>
  )
}

export default Today