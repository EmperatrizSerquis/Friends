import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

export default styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    minWidth: 90,
    width: '85%',
    backgroundColor: colors.blue,
    maxWidth: 500,
    height: 50,
    minHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.yellow,
    fontSize: 30,
    fontFamily: 'Text',

  }
})
