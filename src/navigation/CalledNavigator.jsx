import { StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native'
import  { Header }  from '../components'
import { Called } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function CalledNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Called"
      screenOptions={( {route, navigation} ) => ({
        headerShown: true,
          header: () => (
              <View >
                <Header title={route.name} navigation={navigation} />
              </View>
            ),
      })}
    >
      <Stack.Screen name="Called" component={Called} />
    </Stack.Navigator>
  )
}

export default CalledNavigator
