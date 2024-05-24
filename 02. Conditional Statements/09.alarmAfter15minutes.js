function set_15_MinutesAlarm(hour, minutes) {
  const after15Min = minutes + 15;  

  const hourAfter15Min = Math.floor(after15Min / 60) + hour;
  const formattedHourAfter15Mi = hourAfter15Min > 23 ? 0 : hourAfter15Min;

  const minutesAfter15Min = after15Min % 60;
  const formattedMinutesAfter15Mi = minutesAfter15Min.toString().padStart(2, '0');

  const alarmTime = `${formattedHourAfter15Mi}:${formattedMinutesAfter15Mi}`

  console.log(alarmTime);
}

set_15_MinutesAlarm(1, 47);
set_15_MinutesAlarm(0, 2);
set_15_MinutesAlarm(23, 59);
set_15_MinutesAlarm(11, 7);
set_15_MinutesAlarm(12, 48);
