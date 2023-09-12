import { Button, Modal as NewModal, Text, View, TouchableOpacity } from 'react-native'
import styles from './ModalStyle'

import React from 'react'

const Modal = ({ modalVisible, onHandleDelete, onHandleCancel }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>DELETE FRIEND?</Text>
          </View>
          <View>
            <Text style={styles.modalMessage}>Are you sure?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="Confirm" color={'#F2E257'} onPress={onHandleDelete} />
          </View>
          <TouchableOpacity
             style={styles.cancelButton}
             onPress={onHandleCancel}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NewModal>
  )
}


