import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 80,
    width: '100%',    
    justifyContent: 'center',
    alignItems: 'center',   
  },
  flexContainer: {
    backgroundColor: colors.white,
    color: colors.violet,
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
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
    paddingLeft: 2,
    paddingVertical: 5,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})