import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: colors.white,
    height: 80,
    width: '100%',    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
    gap: 10,  
  },
  date: {
    fontSize: 20,
  },
  time: {
    fontSize: 20,
  },

})