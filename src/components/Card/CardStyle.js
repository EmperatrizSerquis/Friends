import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.violet,
    color: colors.white,
    shadowColor: '#000',
    shadowOffset: { 
        width: 0,
        height: 2, },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})