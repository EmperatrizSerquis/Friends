import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: colors.white,
    width: '100%',    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  date: {
    fontSize: 20,
  },
  time: {
    fontSize: 20,
  },

})