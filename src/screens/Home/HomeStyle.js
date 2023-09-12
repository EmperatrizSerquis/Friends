import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: colors.white,
  },
  title: {
    color: '#8C44DB',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  textContainer: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#7858F2',
    color: '#fff',
    borderColor: '#442BA6',
    borderRadius: 10,
    borderWidth: 3,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#9175FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
})
