import { StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native'
import  { Header }  from '../components'
import { Categories } from '../screens'
import { CategoriesDetail } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function CategoriesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={( {route, navigation} ) => ({
        headerShown: true,
          header: () => (
              <View >
                <Header title={route.name} navigation={navigation} />
              </View>
            ),

      })}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoriesDetail" component={CategoriesDetail} />
    </Stack.Navigator>
  )
}

export default CategoriesNavigator
