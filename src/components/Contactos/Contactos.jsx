import React, { useEffect, useState } from 'react';
import {  View, Text, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import styles from './ContactosStyle'

const Contactos = () => {
  let [error, setError] = useState(undefined)
  let [contacts, setContacts] = useState(undefined)

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') { 
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.Name, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.Company, Contacts.Fields.PhoneNumbers, Contacts.Fields.ImageAvailable],
        });

        if (data.length > 0) {
          console.log(data)
          const contact = data[0];
          console.log(contact);
          setContacts(data)
        } else {
          setError('No contacts Available')
        }
      } else {
        setError('Permission to access contacts denied')
      }
    })();
  }, []);

  let getPhoneNumbers = (contact) => {
    if (contact.phoneNumbers) {
      return contact.phoneNumbers.map((phoneNumber, index) => {
        return (
          <View key={index}>
            <Text style={{marginTop:15}}>{`${phoneNumber.label}: ${phoneNumber.number}`}</Text>
          </View>
        )
      })
    }
  }
  
  let getEmails = (contact) => {
    if (contact.emails) {
      return contact.emails.map((email, index) => {
        return (
          <View key={index}>
            <Text style={{marginTop:15}}>{email.label}: {email.email}</Text>
          </View>
        )
      })
    }
  } 

  let getContactData = (data, property) => {
    if (data) {
      return data.map((data, index) => {
        return (
          <View key={index}>
            <Text style={{marginTop:15}}>{data.label}: {data[property]}</Text>
          </View>
        )
      })
    }
  } 

  const getContactRows = () => {
    if (contacts !== undefined) {
      return contacts.map((contact, index) => {
        return (
          <View key={index} style={styles.wrapperStyle}>
            <Text style={styles.name}>
                {contact.firstName ? contact.firstName[0] : ''}
                {contact.lastName ? contact.lastName[0] : ''}  
            </Text>
            <Text>
              {contact.name ? 'Nombre Completo: ' + contact.name : ''}
            </Text>
            { contact.birthday ? (
              <Text>Birthday: {contact.birthday.day}/{contact.birthday.month}/  {contact.birthday.year} </Text>) : undefined }
          
            <Text style={styles.company}>{contact.company ? 'Company: ' + contact.company : ''}</Text>

           {getPhoneNumbers(contact)}

          {getContactData(contact.emails, 'email')}
        </View>
        )
        
      })

    } else {
      return <Text>Awaiting</Text>
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>My Contacts {error}</Text>
      {getContactRows()}
      </ScrollView>
    </View>
  );
}

export default Contactos


