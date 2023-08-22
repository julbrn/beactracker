import React, { useState, useEffect } from "react";
import { TextField, Slider, Button, Tooltip, Fab, Select, Box, InputLabel, FormControl, MenuItem, Typography } from '@mui/material';
import "./profile.css";
import AddIcon from '@mui/icons-material/Add';
import dayjs from "dayjs";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import DownhillSkiingRoundedIcon from '@mui/icons-material/DownhillSkiingRounded';
import Calendar from "../../components/Calendar/Calendar";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ColouredSlider from "../../components/StyledSlider";

function Profile() {
  const [diaryDate, setDiaryDate] = useState<string>(dayjs(new Date()).format("D MMMM"));
  const [open, setOpen] = useState(false);
  const handleDiaryDateChange = (date: string) => {
    setDiaryDate(date);
  };

  const handleCreateActivity = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false); // Set the open state to false when the Dialog is closed
  };

  // Тут всё для рейтинга настроения
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
    <div className="profile">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h3'>{diaryDate}</Typography>
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
        <Tooltip title="Добавить новую активность" placement="right">
          <Fab color="primary" aria-label="add" sx={{ height: "3rem", width: "3rem" }} onClick={handleCreateActivity}>
            <AddIcon />
          </Fab>
        </Tooltip>
        {open &&
          <FormControl component="fieldset" sx={{ width: 850, display: "flex", gap: 3, backgroundColor: "#393f4b", border: "1px solid rgba(255, 255, 255, .2)", padding: 3, borderRadius: "5px" }}>
            <TextField label="Активность" type="text" style={{ width: 300, fontSize: 14 }} margin="normal" variant="outlined" required />
            <FormControl sx={{ width: 200 }} required >
              <InputLabel shrink id="demo-simple-select-label">Сфера</InputLabel>
              <Select variant='outlined' label="Настроение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" notched sx={{ fontSize: 14 }}
              >
                <MenuItem sx={{ height: "50px", fontSize: 14 }} value={4}><div className='align'><PeopleRoundedIcon sx={{ marginRight: "3px" }} /><span>Отношения</span></div></MenuItem>
                <MenuItem sx={{ height: "50px", fontSize: 14 }} value={3}><div className='align'><WorkOutlineRoundedIcon sx={{ marginRight: "3px" }} /><span>Образование/Карьера</span></div></MenuItem>
                <MenuItem sx={{ height: "50px", fontSize: 14 }} value={2}><div className='align'><DownhillSkiingRoundedIcon sx={{ marginRight: "3px" }} /><span>Отдых/Интересы</span></div></MenuItem>
                <MenuItem sx={{ height: "50px", fontSize: 14 }} value={1}><div className='align'><SelfImprovementIcon sx={{ marginRight: "3px" }} /><span>Разум/Тело/Духовность</span></div></MenuItem>
                <MenuItem sx={{ height: "50px", fontSize: 14 }} value={0}><div className='align'><HouseRoundedIcon sx={{ marginRight: "3px" }} /><span>Быт</span></div></MenuItem>
              </Select>
            </FormControl>
            <div style={{ width: '700px' }}>
              <table style={{ width: '100%', borderSpacing: "30px" }}>
                <thead>
                  <tr>
                    <th>Ожидание</th>
                    <th>Реальность</th>
                    <th>Мастерство</th>
                    <th>Сложность</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ColouredSlider

                      /></td>
                    <td>
                      <ColouredSlider

                      /></td>
                    <td>
                      <ColouredSlider

                      /></td>
                    <td>
                      <ColouredSlider

                      /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography>Вам кто-то может помочь?</Typography>
              <Fab color="primary" aria-label="Добавить помощника" sx={{ width: "34px", height: "34px" }}>
                <PersonAddAltRoundedIcon sx={{ width: "18px", height: "18px" }} />
              </Fab>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button variant="outlined" onClick={handleClose}>Отмена</Button>
              <Button variant="outlined" onClick={handleClose}>Добавить</Button>
            </Box>
          </FormControl>
        }
      </Box>
      <Calendar onDiaryDateChange={handleDiaryDateChange} />

    </div>
  )
}

export default Profile