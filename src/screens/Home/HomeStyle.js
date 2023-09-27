import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    /* paddingTop: '2%', */
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: colors.white,
    color: colors.violet,
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: '8%',
    textAlign: 'center',
  },
  textContainer: {
    textAlign: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    fontSize: 35,
    fontWeight: 'bold',
    backgroundColor: colors.blue,
    color: colors.white,
    borderColor: colors.lightblue,
    borderWidth: 5,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    marginBottom: '20%',
    fontFamily: 'Title',
  },
  action: {
    maxHeight: '50%',
    paddingTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  categoriesButton: {
    backgroundColor: colors.lightblue,

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    
  },
  textCatButton: {
    fontFamily: 'Label',
    fontSize: 30,
    color: colors.pink,
    
  },
  friendsButton: {
    backgroundColor: colors.blue,
    paddingHorizontal: 35,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    borderColor: colors.lightblue,
    borderWidth: 1,
    borderRadius: 10,

  },
  textFriendButton: {
    fontFamily: 'Label',
    fontSize: 30,
    color: colors.white,

  }

})
