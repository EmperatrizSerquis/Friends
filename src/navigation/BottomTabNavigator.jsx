import { StyleSheet, View, Text } from 'react-native'
import TodayNavigator from './TodayNavigator'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import CalledNavigator from './CalledNavigator'
import CategoriesNavigator from './CategoriesNavigator'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Start"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : styles.textContainer}>
              <FontAwesome5 name="home" size={24} color={colors.blue} />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="TodayNav"
        component={TodayNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : styles.textContainer}>
              <FontAwesome5 name="calendar-plus" size={24} color={colors.blue} />
              <Text>Today</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CalledNav"
        component={CalledNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : styles.textContainer}>
               <FontAwesome5 name="phone-square" size={24} color={colors.blue} />
               <Text style={styles.text}>Called</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CategoriesNav"
        component={CategoriesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : styles.textContainer}>
               <FontAwesome5 name="grin-stars" size={24} color={colors.blue} />
               <Text style={styles.text}>Categories</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 5,
  },
  iconContainer: {
    borderColor: colors.lightblue,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
  
    borderRadius: 20,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
