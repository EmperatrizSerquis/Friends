import React from 'react'
import { View, Text, Image,  } from 'react-native'
import styles from './CardStyle'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Card = ({ item }) => {
  return (
          <>
            <Image
                style={styles.image}
                source={{
                  uri: item.thumbnail,
                }}
              />
             <View style={styles.listContainer}>
                <View style={styles.wrapperStyle}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                </View>
                <View style={styles.wrapperStyle}>
                  <Text style={styles.company}>{item.category}</Text>
                  <Text style={styles.cellphone}>{item.cellPhone}</Text>
                </View>

                <View style={styles.bottom}>
                  <Text style={styles.call}>{item.frequency}</Text>
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.company}>Called: {item.lastCall}</Text>

                  <Text style={styles.call}><FontAwesome5 name="phone-square" size={20} color={colors.blue} /> {item.nextCall}</Text>
            
                </View>
              </View>
              </>
  )
  {/* <View style={[styles.container, style]}>{children}</View> */}
}

export default Card
