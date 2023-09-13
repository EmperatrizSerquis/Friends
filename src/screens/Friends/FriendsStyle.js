import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 15,
  },
  nameButton: {
    height: 60,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.violet,
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 28,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Label',
  }
})
