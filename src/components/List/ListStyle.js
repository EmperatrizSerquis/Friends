import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 25,
  },
  itemContainer: {
    flex: 1,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingRight: 15,
    backgroundColor: colors.violet,
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
})

