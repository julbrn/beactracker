import { useState } from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
dayjs.locale("ru");
type DatesAndNumbers = {
    [key: string]: string;
};

interface CalendarProps {
    onDiaryDateChange: (date: string) => void;
}
function Calendar({ onDiaryDateChange }: CalendarProps) {
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
    data.forEach((item) => {
        datesAndNumbers[item.date] = item.color;
    });

    const getNumberForDay = (day: Dayjs) => {
        const formattedDay = day.locale("ru").format("YYYY-MM-DD");
        return datesAndNumbers[formattedDay] || 0;
    };
    const CustomDay = (props: PickersDayProps<Dayjs>) => {
        const { day, children } = props;
        const formattedDay = day.locale("ru").format("YYYY-MM-DD");
        if (formattedDay in datesAndNumbers) {
            const moodColor = getNumberForDay(day);
            return (
                // отрендерить кастомный вариант
                <Box sx={{ position: "relative" }}>
                    <PickersDay {...props}
                    >
                        {children}
                    </PickersDay>
                    <Box sx={{ position: "absolute", top: 0, right: 16, width: 8, height: 8, borderRadius: "50%", backgroundColor: `${moodColor === "red" ? "#cf5353" : moodColor === "orange" ? "#ef9a61" : moodColor === "yellow" ? "#ecdd82" : moodColor === "salad" ? "#b7ed71" : "#5bbc62"}` }} />
                </Box>
            );
        } else {
            // отрендерить дефолтный вариант
            return (<PickersDay {...props}>
            </PickersDay>);
        }
    };
    return (
        <div>
            <StaticDatePicker sx={{ display: { xs: "none", md: "block" }, transform: "scale(1.3)", position: "absolute", top: "12rem", right: "6rem" }} value={value} orientation='portrait'
                slotProps={{
                    actionBar: {
                        actions: [],
                    },
                }}
                onChange={(newValue) => { setValue(newValue); onDiaryDateChange(dayjs(newValue).format("D MMMM")) }} slots={{
                    day: CustomDay
                }} />
            <MobileDatePicker sx={{ display: { xs: "block", md: "none" } }} value={value} orientation='portrait'
                slotProps={{
                    actionBar: {
                        actions: [],
                    },
                }}
                onChange={(newValue) => { setValue(newValue); onDiaryDateChange(dayjs(newValue).format("D MMMM")) }} slots={{
                    day: CustomDay
                }} />
        </div>
    )
}

export default Calendar