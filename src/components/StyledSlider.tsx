import React from 'react';
import Slider from '@mui/material/Slider';

type ColouredSliderProps = {
    name: string;
    value: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ColouredSlider({ name, value, handleChange }: ColouredSliderProps) {
    return (
        <Slider
            name={name}
            onChange={handleChange}
            value={value}
            valueLabelDisplay="auto"
            defaultValue={5}
            min={1}
            max={10}
            sx={name !== "difficulty" ? { '& .MuiSlider-thumb, & .MuiSlider-track': { backgroundColor: value < 3 ? '#cf5353' : value < 5 ? '#ef9a61' : value < 7 ? '#ecdd82' : value < 9 ? '#b7ed71' : '#5bbc62' } } : {}}
        />
    );
}

export default ColouredSlider