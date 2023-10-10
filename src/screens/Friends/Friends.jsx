import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { SearchInput } from '../../components'
import { Contactos } from '../../components'
import { Card } from '../../components'
/* import allFriends from '../../data/friends' */
import styles from './FriendsStyle'
import { colors } from '../../constants/colors'
import { useGetCategoriesQuery } from '../../services/friendsApi'
import { useSelector } from 'react-redux'

const Friends = ({ navigation, route }) => {
  /* const [arrFriends, setArrFriends] = useState([]) */
  const { data, isLoading } = useGetCategoriesQuery()
  const [keyword, setKeyword] = useState('')
  const category = useSelector(state =>state.friends.categorySelected)
  
  /* const friendsFiltered = allFriends.filter(friend =>
    friend.title.includes(keyword)
  ) */
  /* setArrFriends(allFriends) */

  /* useEffect(() => {
    if (category) {
      const friends = allFriends.filter(
        friend => friend.category === category
      )
      const friendsFiltered = friends.filter(friend =>
        friend.title.includes(keyword)
      )
      setArrFriends(friendsFiltered)
    } else {
      const friendsFiltered = allFriends.filter(friend =>
        friend.title.includes(keyword)
      )
      setArrFriends(friendsFiltered)
    }
  }, [category, keyword]) */

  return (
    <View style={styles.container}>
      <SearchInput onSearch={setKeyword} />

      <View style={styles.listContainer}>
      {!isLoading && (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.friendContainer}
              onPress={() => navigation.navigate('Details', { friend: item })}
            >  
              {/* <Card item={item,name} navigation={navigation} /> */}
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
              
            </TouchableOpacity>
          )}
          
        />
        )}
      </View>
    </View>
  )
}

export default Friends
