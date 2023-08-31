import React, { useState, useEffect } from "react";
import { TextField, Checkbox, Stack, Chip, Button, IconButton, Tooltip, Fab, Select, Box, InputLabel, FormControl, MenuItem, Typography } from '@mui/material';
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
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function Profile() {
  const [mood, setMood] = useState<string | undefined>(undefined);
  const [sphere, setSphere] = useState<string>("");
  const [expectation, setExpectation] = useState<number>(5);
  const [reality, setReality] = useState<number>(5);
  const [mastery, setMastery] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<number>(5);
  const [friend, setFriend] = useState<string | null>(null);
  const [diaryDate, setDiaryDate] = useState<string>(dayjs(new Date()).format("D MMMM"));
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const [friendModalOpened, setFriendModalOpened] = useState<boolean>(false);
  const [friendList, setFriendList] = useState<string[]>([]);
  const [activities, setActivities] = useState<
    {
      activity: string;
      sphere: string;
      expectation: number;
      reality: number;
      mastery: number;
      difficulty: number;
      friendList?: string[];
      comment?: string;
    }[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "expectation":
        setExpectation(parseInt(value));
        break;
      case "reality":
        setReality(parseInt(value));
        break;
      case "mastery":
        setMastery(parseInt(value));
        break;
      case "difficulty":
        setDifficulty(parseInt(value));
        break;
      default:
        console.error(`Unhandled id: ${name}`);
    }
  };
  const {
    register, handleSubmit, reset,
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

  const handleSaveActivity = (data) => {

    const newActivity = {
      activity: data.activity ?? "",
      sphere: data.sphere ?? "",
      expectation: expectation ?? 5,
      reality: reality ?? 5,
      mastery: mastery ?? 5,
      difficulty: difficulty ?? 5,
      friendList: friendList ?? undefined,
      comment: data.comment ?? undefined,
    };

    setActivities([...activities, newActivity]);
    handleCloseActivityForm();
    setSphere("");
    setFriendList([]);
    reset();
  }

  const handleFriendDelete = (friend: string) => {
    const index = friendList.indexOf(friend);
    if (index !== -1) {
      friendList.splice(index, 1);
      setFriendList([...friendList]);
    }
  };

  console.log(activities)

  return (
    <div className="profile">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, marginBottom: 20 }}>
        <Typography variant='h3'>{diaryDate}</Typography>
        <MoodRating />
        {
          activities.length > 0 &&
          <Stack direction="column" spacing={1}>
            {activities.map((activity) => (
              <Box
                key={activity}
                label={activity}
                sx={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4, backgroundColor: "#393f4b", paddingInline: 3, paddingBlock: 2, borderRadius: "10px", width: "720px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Tooltip title="Уже выполнено?" placement="top">
                    <Checkbox size="medium" />
                  </Tooltip>
                  <Typography>{activity.activity}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Chip label={activity.sphere} sx={{ backgroundColor: "rgba(159, 101, 152, 0.6)" }}></Chip>
                  {activity.friendList ? (activity.friendList.map((friend) => (
                    <Chip label={friend} sx={{ backgroundColor: "rgba(252, 174, 188, 0.6)" }}></Chip>))) : null}
                </Box>
                <Tooltip title="Сложность" placement="top">
                  <Box sx={{ borderRadius: "50%", padding: 2, height: 40, width: 40, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(187, 187, 187, 0.6)" }}>{activity.difficulty}</Box>
                </Tooltip>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Tooltip title="Редактировать" placement="top">
                    <IconButton size="small" aria-label="редактировать">  <EditRoundedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title="Удалить" placement="top">
                    <IconButton size="small" aria-label="удалить"><DeleteForeverRoundedIcon /></IconButton>
                  </Tooltip>
                </Box>
              </Box>
            ))}
          </Stack>
        }
        <Tooltip title="Добавить новую активность" placement="right">
          <Fab color="primary" aria-label="добавить" sx={{ height: "3rem", width: "3rem" }} onClick={handleOpenActivityForm}>
            <AddIcon />
          </Fab>
        </Tooltip>
        {formOpened &&
          <form onSubmit={handleSubmit(handleSaveActivity)}>
            <FormControl component="fieldset" sx={{ width: 850, display: "flex", gap: 3, backgroundColor: "#393f4b", border: "1px solid rgba(255, 255, 255, .2)", padding: 3, borderRadius: "5px" }}>
              <TextField id="activity" label="Дело" required type="text" style={{ width: 300, fontSize: 14 }} margin="normal" variant="outlined" error={!!errors.activity}
                helperText={errors.activity?.message}
                {...register("activity",
                  {
                    required: "Обязательное поле",
                    minLength: { value: 2, message: "Описание дела должно содержать не менее 2 символов" }, pattern: { value: /^[A-Za-zА-Яа-я0-9-_ ]{2,30}$/, message: "Недопустимый формат" }
                  })}
                name="activity" />
              <FormControl sx={{ width: 250 }} required {...register("sphere",
                {
                  required: "Обязательное поле",

                })}>
                <InputLabel shrink id="demo-simple-select-label">Сфера</InputLabel>
                <Select id="sphere" value={sphere} onChange={(event) => setSphere(event.target.value)} name="sphere" variant='outlined' label="Настроение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" notched sx={{ fontSize: 14 }}
                >
                  <MenuItem sx={{ height: "50px", fontSize: 14 }} value="Отношения"><div className='align'><PeopleRoundedIcon sx={{ marginRight: "3px" }} /><span>Отношения</span></div></MenuItem>
                  <MenuItem sx={{ height: "50px", fontSize: 14 }} value="Образование/Карьера"><div className='align'><WorkOutlineRoundedIcon sx={{ marginRight: "3px" }} /><span>Образование/Карьера</span></div></MenuItem>
                  <MenuItem sx={{ height: "50px", fontSize: 14 }} value="Отдых/Интересы"><div className='align'><DownhillSkiingRoundedIcon sx={{ marginRight: "3px" }} /><span>Отдых/Интересы</span></div></MenuItem>
                  <MenuItem sx={{ height: "50px", fontSize: 14 }} value="Разум/Тело/Духовность"><div className='align'><SelfImprovementIcon sx={{ marginRight: "3px" }} /><span>Разум/Тело/Духовность</span></div></MenuItem>
                  <MenuItem sx={{ height: "50px", fontSize: 14 }} value="Быт"><div className='align'><HouseRoundedIcon sx={{ marginRight: "3px" }} /><span>Быт</span></div></MenuItem>
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
                        <ColouredSlider value={expectation} handleChange={handleChange} name="expectation"
                        /></td>
                      <td>
                        <ColouredSlider value={reality} handleChange={handleChange} name="reality"

                        /></td>
                      <td>
                        <ColouredSlider value={mastery} handleChange={handleChange} name="mastery"

                        /></td>
                      <td>
                        <ColouredSlider value={difficulty} handleChange={handleChange} name="difficulty"

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
                {...register("comment")}
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
      <AddFriend setFriend={setFriend} setFriendModalOpened={setFriendModalOpened} setFriendList={setFriendList} friendList={friendList} friendModalOpened={friendModalOpened} />
    </div>
  )
}

export default Profile