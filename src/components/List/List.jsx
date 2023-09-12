import React from 'react'
import { FlatList, View } from 'react-native';


const List = ({ itemsList, renderListItem }) => {
    return (
      <View style={styles.listContainer}>
        <FlatList 
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }
  
  export default List