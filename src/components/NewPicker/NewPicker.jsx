
import { TouchableOpacity, Pressable, View, Text, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { onChangeDate } from '../../features/calendar/calendarSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './NewPickerStyle'


const NewPicker = () => {
  const [date, setDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(new Date());

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const calendar = useSelector(state => state.calendar.value)
  const dispatch = useDispatch()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setNextDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={showDatepicker} style={styles.button}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <TouchableOpacity onPress={showTimepicker} style={styles.buttonAlt}>
        <Text style={styles.buttonText}>Select Time</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Selected: {date.toLocaleString()}</Text>
      
      <Pressable onPress={() => dispatch(onChangeDate(nextDate.toLocaleString()))} style={styles.button}>
        <Text style={styles.buttonText}>SAVE NEXT CALL</Text>
      </Pressable>
      <Text > { calendar} </Text>
    </View>
  );
}

export default NewPicker


