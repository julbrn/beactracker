import React from 'react';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Tooltip from '@mui/material/Tooltip';

function MoodRating() {
    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
            color: theme.palette.action.disabled,
        },
    }));

    const customIcons: {
        [index: string]: {
            icon: React.ReactElement;
            label: string;
        };
    } = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: 54, color: "#cf5353" }} />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon sx={{ fontSize: 54, color: "#ef9a61" }} />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon sx={{ fontSize: 54, color: "#ecdd82" }} />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 54, color: "#b7ed71" }} />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 54, color: "#5bbc62" }} />,
            label: 'Very Satisfied',
        },
    };

    function IconContainer(props: IconContainerProps) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }
    return (
        <Tooltip title="Цвет настроения за день, который будет отображаться в календаре" placement="right">
            <StyledRating
                sx={{ display: "flex", width: 300, justifyContent: "space-between" }}
                name="highlight-selected-only"
                defaultValue={3}
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
            />
        </Tooltip>
    )
}

export default MoodRating