import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 20,
  },
  input: {
    width: '80%',
    height: 5,
    fontSize: 19,
    paddingLeft: 10,
    borderColor: colors.violet,
    backgroundColor: colors.white,
    color: colors.text,
    shadowColor: colors.blue,
    borderWidth: 2,
    borderRadius: 8,
    fontFamily: 'Label',
  },
})
