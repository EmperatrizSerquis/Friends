import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import styles from './CalendarStyle'
import { onChange } from '../../features/calendar/calendarSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Calendar() {
  const [newDate, setNewDate] = useState(new Date());
  const calendar = useSelector(state => state.calendar.value)
  const dispatch = useDispatch()


  return (
    <View style={styles.container}>
      <DateTimePicker
        value={calendar}
        mode={"date"}
        is24Hour={true}
        onChange={() => dispatch(onChange())}
      />
      <DateTimePicker
        value={calendar}
        mode={"time"}
        is24Hour={true}
        onChange={() => dispatch(onChange())}
      />
      <Text>{newDate.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

