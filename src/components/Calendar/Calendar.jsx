
import { View, Text, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import styles from './CalendarStyle'
import { onChangeDate } from '../../features/calendar/calendarSlice'
import { useDispatch, useSelector } from 'react-redux'

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const calendar = useSelector(state => state.calendar.value)
  const dispatch = useDispatch()

  const toggleDatepicker = () => {
    setShowPicker(!showPicker)
  }

  const handleOnChange = ( { type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate
      setNextDate(currentDate)

      if(Platform.OS === 'android') {
        toggleDatepicker()
        setDate(currentDate)
      } 
    } else {
      toggleDatepicker()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CLICK to Enter the Date and press "NEXT CALL" to save it</Text>

      {
        Platform.OS === 'android' && (
      <>
        <View style={styles.calendarDate} >
        {showPicker && (
          <DateTimePicker
            value={nextDate}
            mode={"date"}
            is24Hour={true}
            onChange={handleOnChange}
          />
        )}
      
      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
          <TextInput 
            style={styles.input}
            value={date}
            placeholder="Enter your next contact date"
            placeholderTextColor={"#000"}
            onChangeText={setDate}
            editable={false}
            onPressIn={toggleDatepicker}
          />
        </Pressable>
      )}
      </View>

          </>
        )
      }

      {
        Platform.OS === "ios" && (
          <>
          <View style={styles.calendarDate} >
            <DateTimePicker
              value={nextDate}
              mode={"date"}
              is24Hour={true}
              onChange={handleOnChange}
            />
          </View>
          <View style={styles.calendarDate} >
            <DateTimePicker
              value={nextDate}
              mode={"time"}
              is24Hour={true}
              onChange={handleOnChange}
            />
          </View>
          </>
        )
      }
      

      <Pressable onPress={() => dispatch(onChangeDate(nextDate.toLocaleString()))} style={styles.button}>
          <Text style={styles.buttonText}>NEXT CALL</Text>
        </Pressable>
      <Text > { calendar} </Text>
      
    </View>
  );
}


export default Calendar

