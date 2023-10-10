import { Text, View  } from 'react-native'
import  { Contactos }  from '../../components'
import React from 'react'
import styles from './AgendaStyle'

const Agenda = () => {
  return (
    <View styles={styles.container}> 
    <Text styles={styles.name}>AGENDA</Text>  

    <Contactos/>
      
    </View>
  )
}

export default Agenda