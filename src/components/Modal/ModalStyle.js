import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: colors.yellow,
        width: '80%',
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        shadowColor: colors.violet,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      modalTitle: {
        color: colors.violet,
        fontSize: 22,
        marginBottom: 15
      },
      modalMessage: {
        marginBottom: 15,
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: '#F2E257',
        backgroundColor: '#442BA6',
      },
      cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: '#442BA6',
        borderColor: '#442BA6',
        borderWidth: 1,
        marginTop:30,
      },
      cancelText: {
        color: '#000',
      },
})