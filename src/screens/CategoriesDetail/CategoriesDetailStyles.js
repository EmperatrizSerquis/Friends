import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginVertical: 35,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
      },
      contentContainer: {
        paddingLeft: 20,
      },
      image: {
        marginTop: 50,
        resizeMode: 'cover',
        justifyContent: 'center',
        height: '100%',

      },
      text: {
        fontFamily: 'Text',
        color: colors.white,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#0c494fa0',
    
      },
      description: {
        marginTop: 30,
        fontSize: 20,
      },
      action: {
        marginVertical: 35,
        justifyContent: 'center',
        alignItems: 'center',
      
      },
      paymentsButton:{
        backgroundColor: colors.darkgreen,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 35,
        paddingVertical: 15,
        shadowColor: colors.white,
        shadowOffset: { height: 5, width: 3 },
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    
    },
    textPayButton: {
      color: colors.secondary,
      fontSize: 30,
      fontFamily: 'Label',
    },
})