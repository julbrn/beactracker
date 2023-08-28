import React from 'react';
import Slider from '@mui/material/Slider'

function ColouredSlider() {
    const [value, setValue] = React.useState(5);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            defaultValue={5}
            min={1}
            max={10}
            sx={{
                '& .MuiSlider-thumb, & .MuiSlider-track': {
                    backgroundColor: value < 3 ? '#cf5353' : value < 5 ? '#ef9a61' : value < 7 ? '#ecdd82' : value < 9 ? '#b7ed71' : '#5bbc62'
                },
            }}
        />
    );
}

export default ColouredSlider