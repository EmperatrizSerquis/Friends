import React from 'react'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Text, View } from 'react-native'
import styles from './DateAppStyle'


const DateApp = () => {

const [date, setDate] = useState(dayjs())

useEffect(() => {
    const interval = setInterval(() => {
        setDate(dayjs())
    }, 1000 * 1)
    return () => clearInterval(interval)
}, [])

    return (
      <View styles={styles.dateContainer}>
        <Text styles={styles.date}>{date.format("dddd, DD MMMM")}</Text>
        <Text styles={styles.time}>{date.format("hh:mm:ss")}</Text>
      </View>
    )
  }

  export default DateApp



