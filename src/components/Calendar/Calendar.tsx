import { useState } from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from "dayjs";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
type DatesAndNumbers = {
    [key: string]: string;
};
function Calendar() {
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    const [value, setValue] = useState<Dayjs | null>(dayjs(date));
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
        <>
            <StaticDatePicker sx={{ display: { xs: "none", md: "block" }, transform: "scale(1.3)", position: "absolute", top: "12rem", right: "6rem" }} value={value} orientation='portrait'
                slotProps={{
                    actionBar: {
                        actions: [],
                    },
                }}
                onChange={(newValue) => setValue(newValue)} slots={{
                    day: CustomDay
                }} />
            <MobileDatePicker sx={{ display: { xs: "block", md: "none" } }} value={value} orientation='portrait'
                slotProps={{
                    actionBar: {
                        actions: [],
                    },
                }}
                onChange={(newValue) => setValue(newValue)} slots={{
                    day: CustomDay
                }} />
        </>
    )
}

export default Calendar