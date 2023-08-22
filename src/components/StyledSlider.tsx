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
                    backgroundColor: value < 4 ? '#cf5353' : value > 6 ? '#5bbc62' : '#ecdd82',
                },
            }}
        />
    );
}

export default ColouredSlider