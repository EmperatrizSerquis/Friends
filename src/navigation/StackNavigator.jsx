import { StyleSheet, Text, TouchableOpacity, View, Button, Pressable } from 'react-native'
import  { Home, Today, Friends, Details }  from '../screens'
import  { Header }  from '../components'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../constants/colors'

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
    })}
  >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Today" component={Today} options={({ route, navigation }) => ({
          headerShown: true,
          header: () => (
              <View >
                <Header title={route.name} navigation={navigation} />
              </View>
            ),
        })}/>

        <Stack.Screen name="Friends" component={Friends} 
        options={({ route, navigation }) => ({
          headerShown: true,
          header: () => (
              <View >
                <Header title={route.name} navigation={navigation} />
              </View>
            ),
        })}   
            />
        <Stack.Screen name="Details" component={Details} 
        options={({ route, navigation }) => ({
          headerShown: true,
          header: () => (
              <View style={styles.flexContainer}>
                <Header title={route.name} navigation={navigation} />
                <Button onPress={() => navigation.goBack()} title="Edit" />
              </View>
                
            ),
        })}/>

      
        
      </Stack.Navigator>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  flexContainer: {
    backgroundColor: colors.white,
    color: colors.violet,
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Title',
    textAlign: 'center',
    
  },
  button: {
    width: '15%',
    fontSize: 12,
    backgroundColor: colors.violet,
    paddingLeft: 0,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }

})


