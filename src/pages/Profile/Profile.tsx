import React, { useState } from 'react';
import dayjs, { Dayjs } from "dayjs";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import MenuItem from '@mui/material/MenuItem';
import Emoji1 from "../../assets/emoji1.svg";
import Emoji2 from "../../assets/emoji2.svg";
import Emoji3 from "../../assets/emoji3.svg";
import Emoji4 from "../../assets/emoji4.svg";
import Emoji5 from "../../assets/emoji5.svg";

import "./profile.css";
type DatesAndNumbers = {
  [key: string]: string;
};

function Profile() {
  const currentDate = new Date();
  const date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));
  const data = [
    { date: "2023-08-08", color: "red" },
    { date: "2023-08-09", color: "orange" },
    { date: "2023-08-13", color: "yellow" },
    { date: "2023-08-05", color: "salad" },
    { date: "2023-08-29", color: "green" },
  ];
  const datesAndNumbers: DatesAndNumbers = {};
  // loop through the data array and assign the number to the date key
  data.forEach((item) => {
    datesAndNumbers[item.date] = item.color;
  });

  const getNumberForDay = (day: Dayjs) => {
    // format the day as YYYY-MM-DD using the Russian locale
    const formattedDay = day.locale("ru").format("YYYY-MM-DD");
    // return the number from the object or 0 if not found
    return datesAndNumbers[formattedDay] || 0;
  };
  const CustomDay = (props: PickersDayProps<Dayjs>) => {
    // get the day and children props
    const { day, children } = props;
    console.log(children);
    // format the day as YYYY-MM-DD using the Russian locale
    const formattedDay = day.locale("ru").format("YYYY-MM-DD");
    // check if the date is in the object
    if (formattedDay in datesAndNumbers) {
      // get the number for the day
      const moodColor = getNumberForDay(day);
      // render the default date element with some custom styles
      return (
        <Box sx={{ position: "relative" }}>
          <PickersDay {...props}
          >
            {children}
          </PickersDay>
          <Box sx={{ position: "absolute", top: 0, right: 16, width: 8, height: 8, borderRadius: "50%", backgroundColor: `${moodColor === "red" ? "red" : moodColor === "orange" ? "orange" : moodColor === "yellow" ? "yellow" : moodColor === "salad" ? "#bcf657" : "#0ef748"}` }} />
        </Box>
      );
    } else {
      // render the default date element without any custom styles
      return (<PickersDay {...props}>
      </PickersDay>);
    }
  };

  return (
    <div className="profile">
      <FormControl sx={{ width: 170 }}>
        <InputLabel shrink id="demo-simple-select-label">Настроение</InputLabel>
        <Select variant='outlined' label="Настроение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" notched sx={{ fontSize: 12 }}
        >
          <MenuItem sx={{ height: "50px", fontSize: 12 }} value={4}><div className='align'><img className="emoji" src={Emoji1} alt=" эмодзи 1" /><span>Отличное</span></div></MenuItem>
          <MenuItem sx={{ height: "50px", fontSize: 12 }} value={3}><div className='align'><img className="emoji" src={Emoji2} alt=" эмодзи 1" /><span>Хорошее</span></div></MenuItem>
          <MenuItem sx={{ height: "50px", fontSize: 12 }} value={2}><div className='align'><img className="emoji" src={Emoji5} alt=" эмодзи 1" /><span>Нейтральное</span></div></MenuItem>
          <MenuItem sx={{ height: "50px", fontSize: 12 }} value={1}><div className='align'><img className="emoji" src={Emoji4} alt=" эмодзи 1" /><span>Плохое</span></div></MenuItem>
          <MenuItem sx={{ height: "50px", fontSize: 12 }} value={0}><div className='align'><img className="emoji" src={Emoji3} alt=" эмодзи 1" /><span>Ужасное</span></div></MenuItem>
        </Select>
      </FormControl>
      <StaticDatePicker value={value}
        slotProps={{
          actionBar: {
            actions: [],
          },
        }}
        onChange={(newValue) => setValue(newValue)} slots={{
          day: CustomDay
        }} />
    </div>
  )
}

export default Profile