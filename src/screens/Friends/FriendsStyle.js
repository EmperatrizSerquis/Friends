import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 15,
  },
  wrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    
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
  },
  friendContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderColor: colors.lightblue,
    borderWidth: 2,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 5,
    shadowColor: '#000',
    shadowOffset: { 
        width: 0,
        height: 2, },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    alignSelf: 'center',
    height: 60,
    width: 40,
  },
  name: {
    fontWeight: '700',
    fontSize: 19,
    fontVariant: 'small-caps',
  },
  call: {
    fontSize: 16,
    fontFamily: 'Label',
    color: colors.blue,
  },
  company: {
    fontSize: 16,
  },
  cellphone: {
    fontWeight: '700',
    fontSize: 19,
  },

  bottom: {
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  }
  
})
