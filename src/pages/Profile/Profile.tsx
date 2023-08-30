import React, { useState, useEffect } from "react";
import { TextField, Stack, Chip, Button, Tooltip, Fab, Select, Box, InputLabel, FormControl, MenuItem, Typography } from '@mui/material';
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
import ColouredSlider from "../../components/StyledSlider";
import MoodRating from "../../components/MoodRating";
import { useForm } from "react-hook-form";
import AddFriend from "../../components/AddFriend";

function Profile() {
  const [diaryDate, setDiaryDate] = useState<string>(dayjs(new Date()).format("D MMMM"));
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const [friendModalOpened, setFriendModalOpened] = useState<boolean>(false);
  const [friendList, setFriendList] = useState<string[]>([]);
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleDiaryDateChange = (date: string) => {
    setDiaryDate(date);
  };

  const handleOpenActivityForm = () => {
    setFormOpened(true);
  }

  const handleCloseActivityForm = () => {
    setFormOpened(false);
  };

  const handleOpenFriendModal = () => {
    setFriendModalOpened(true)
  }

  const handleSaveActivity = () => {
    handleCloseActivityForm()
  }

  const handleFriendDelete = (friend: string) => {
    const index = friendList.indexOf(friend);
    if (index !== -1) {
      friendList.splice(index, 1);
      setFriendList([...friendList]);
    }
  };

  return (
    <div className="profile">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 20 }}>
        <Typography variant='h3'>{diaryDate}</Typography>
        <MoodRating />
        <Tooltip title="Добавить новую активность" placement="right">
          <Fab color="primary" aria-label="add" sx={{ height: "3rem", width: "3rem" }} onClick={handleOpenActivityForm}>
            <AddIcon />
          </Fab>
        </Tooltip>
        {formOpened &&
          <form onSubmit={handleSaveActivity}>
            <FormControl component="fieldset" sx={{ width: 850, display: "flex", gap: 3, backgroundColor: "#393f4b", border: "1px solid rgba(255, 255, 255, .2)", padding: 3, borderRadius: "5px" }}>
              <TextField label="Активность" required type="text" style={{ width: 300, fontSize: 14 }} margin="normal" variant="outlined" error={!!errors.activity}
                helperText={errors.activity?.message}
                {...register("activity",
                  {
                    required: "Обязательное поле",
                    minLength: { value: 2, message: "Описание дела должно содержать не менее 2 символов" }, pattern: { value: /^[A-Za-zА-Яа-я0-9-_ ]{2,30}$/, message: "Недопустимый формат" }
                  })}
                name="activity" />
              <FormControl sx={{ width: 250 }} required >
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
                <Fab color="primary" onClick={handleOpenFriendModal} aria-label="Добавить помощника" sx={{ width: "34px", height: "34px" }}>
                  <PersonAddAltRoundedIcon sx={{ width: "18px", height: "18px" }} />
                </Fab>
              </Box>
              <Stack direction="row" spacing={1}>
                {friendList.map((friend) => (
                  <Chip
                    key={friend}
                    label={friend}
                    onDelete={() => handleFriendDelete(friend)}
                    sx={{ fontSize: "16px", backgroundColor: "rgba(252, 174, 188, 0.6)" }}
                  />
                ))}
              </Stack>
              <TextField id="comment" name="comment"
                label="Комментарий"
                multiline
                rows={3}
              />
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button variant="outlined" onClick={handleCloseActivityForm}>Отмена</Button>
                <Button variant="outlined" type="submit">Добавить</Button>
              </Box>
            </FormControl>
          </form>
        }
      </Box>
      <Calendar onDiaryDateChange={handleDiaryDateChange} />
      <AddFriend setFriendModalOpened={setFriendModalOpened} setFriendList={setFriendList} friendList={friendList} friendModalOpened={friendModalOpened} />
    </div>
  )
}

export default Profile