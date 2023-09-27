import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingLeft: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    fontFamily: 'Text',
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0c494fa0',
  

  },
})