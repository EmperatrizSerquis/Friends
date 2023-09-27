import React from 'react'
import { TextInput } from 'react-native';
import styles from './MyInputStyle'

  const MyInput = ({ textValue, placeholder, onHandleChangeItem  }) => {
    
    return (
        <TextInput style={styles.input} placeholder={placeholder} type="text" 
        value={textValue}
        onChangeText={onHandleChangeItem} />
      
    );
  }

  export default MyInput
