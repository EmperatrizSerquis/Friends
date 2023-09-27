import { Image, Text, TouchableOpacity } from 'react-native'
import styles from './CategoryItemStyle'
import { useDispatch } from "react-redux"
import { setCategorySelected } from '../../features/friends/friendsSlice'



const CategoryItem = ({ category, navigation, route }) => {

  const dispatch = useDispatch()

  return (
  
    <TouchableOpacity
      onPress={() => {
        dispatch(setCategorySelected({category}))
        navigation.navigate('CategoriesDetail', { category })}
      } 
      style={styles.container}
    >
        <Image style={styles.image} source={{ uri: category.picture }} />
        <Text style={styles.text}>{category.title}</Text>
    </TouchableOpacity>
    
  )
}

export default CategoryItem