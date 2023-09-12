import React from 'react'
import { TextInput } from 'react-native';
import styles from './MyInputStyle'

  const MyInput = ({ textValue, onHandleChangeItem  }) => {
    
    return (
        <TextInput style={styles.input} placeholder="New FRIEND" type="text" 
        value={textValue}
        onChangeText={onHandleChangeItem} />
      
    );
  }

  export default MyInput
