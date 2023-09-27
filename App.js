import BottomTabNavigator from './src/navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { SafeAreaView, StyleSheet,  ActivityIndicator } from 'react-native';
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'

const image = { uri: "https://eproweb.net/pictures/about_us_pics/1/blue-bin9VbG.jpg" };

export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return (<ActivityIndicator size={"large"} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
