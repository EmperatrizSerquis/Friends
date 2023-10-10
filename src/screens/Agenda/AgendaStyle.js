import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  title: {
    fontFamily: 'Title',
    fontSize: 30,
    color: colors.violet,
    marginVertical: 20,
  },
})