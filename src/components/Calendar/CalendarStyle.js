import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    height: '70%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  title: {
    marginTop: 15,
    paddingBottom: 15,
  },
  calendarDate: {
    display: 'flex',
    height: '20%',
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: colors.violet,
    borderBottomWidth: 2,
  },
  button: {
    width: '50%',
    fontSize: 12,
    backgroundColor: colors.violet,
    paddingLeft: 2,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Label',
  }
})

