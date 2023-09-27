import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: '20%',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    width: '20%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Title',

  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Subtitle',

  },
  informationContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderColor: colors.lightblue,
    borderWidth: 2,
    marginTop: 15,
    marginBottom: 5,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 5,
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',   
    marginBottom: 0,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 1,
  },
  information: {
    fontSize: 18,
    fontFamily: 'Text',
    marginVertical: 1,
  },
  frequency: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 1,
    color: colors.pink,
  }
})
