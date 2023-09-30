import { Image, Text, View, ScrollView } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React from 'react'
import styles from './DetailsStyle'
import { colors } from '../../constants/colors'

const Details = ({ route }) => {
  const { friend } = route.params
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: friend.images[1] }}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>{friend.name}</Text>
      <Text style={styles.subtitle}>{friend.category}</Text>
      <Text style={styles.title}><FontAwesome5 name="phone-volume" size={30} color={colors.blue} /> {friend.cellPhone}</Text>
      <Text style={styles.subtitle}>{friend.company}</Text>
      <View style={styles.informationContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Frequency   <FontAwesome5 name="expand-arrows-alt" size={25} color={colors.pink} />   {friend.frequency}</Text>
          
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Next Call: </Text>
          <Text style={styles.information}><FontAwesome5 name="arrow-circle-right" size={25} color={colors.blue} />   {friend.lastCall}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Last Call: </Text>
          <Text style={styles.information}>{friend.lastCall}</Text>
        </View>
        
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Birthday: </Text>
          <Text style={styles.information}><FontAwesome5 name="bahai" size={30} color={colors.violet} />   {friend.birthday}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>
            Contacts:   
          </Text>
          <Text style={styles.information}>
          <Text style={styles.information}><FontAwesome5 name="phone" size={25} color={colors.yellow} />   {friend.calls}    </Text>
          <FontAwesome5 name="envelope-square" size={25} color={colors.yellow} />    {friend.messages} </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Email: </Text>
          <Text style={styles.information}><FontAwesome5 name="envelope-open-text" size={30} color={colors.violet} />   {friend.email}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Description: </Text>
          <Text style={styles.information}>  {friend.description}</Text>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default Details
