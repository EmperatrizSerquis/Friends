import { FlatList, Text, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'

import allFriends from '../../data/friends'
import styles from './FriendsStyle'

const Friends = ({ category }) => {
  const [arrFriends, setArrFriends] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
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
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Header title={category}  />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrFriends}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Friends
