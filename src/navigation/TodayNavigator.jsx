import { StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native'
import  { Header }  from '../components'
import { Today } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function TodayNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Today"
      screenOptions={( {route, navigation} ) => ({
        headerShown: true,
          header: () => (
              <View >
                <Header title={route.name} navigation={navigation} />
              </View>
            ),
      })}
    >
      <Stack.Screen name="Today" component={Today} />
    </Stack.Navigator>
  )
}

export default TodayNavigator
