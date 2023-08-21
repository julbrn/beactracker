import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Emoji1 from "../../assets/emoji1.svg";
import Emoji2 from "../../assets/emoji2.svg";
import Emoji3 from "../../assets/emoji3.svg";
import Emoji4 from "../../assets/emoji4.svg";
import Emoji5 from "../../assets/emoji5.svg";
import Typography from '@mui/material/Typography';
import "./profile.css";
import Calendar from '../../components/Calendar/Calendar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

function Profile() {

  return (
    <div className="profile">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h3'>Дневник за 21 августа</Typography>
        <Tooltip title="Настроение за день">
          <FormControl sx={{ width: 200 }}>
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
        </Tooltip>
        <Tooltip title="Добавить новую активность">
          <Fab color="primary" aria-label="add" sx={{ height: "3rem", width: "3rem" }}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <FormControl sx={{ width: 200 }}>
          <InputLabel shrink id="demo-simple-select-label">Сфера</InputLabel>
          <Select variant='outlined' label="Настроение&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" notched sx={{ fontSize: 12 }}
          >
            <MenuItem sx={{ height: "50px", fontSize: 12 }} value={4}><div className='align'><img className="emoji" src={Emoji1} alt=" эмодзи 1" /><span>Отношения</span></div></MenuItem>
            <MenuItem sx={{ height: "50px", fontSize: 12 }} value={3}><div className='align'><img className="emoji" src={Emoji2} alt=" эмодзи 1" /><span>Образование/Карьера</span></div></MenuItem>
            <MenuItem sx={{ height: "50px", fontSize: 12 }} value={2}><div className='align'><img className="emoji" src={Emoji5} alt=" эмодзи 1" /><span>Отдых/Интересы</span></div></MenuItem>
            <MenuItem sx={{ height: "50px", fontSize: 12 }} value={1}><div className='align'><img className="emoji" src={Emoji4} alt=" эмодзи 1" /><span>Разум/Тело/Духовность</span></div></MenuItem>
            <MenuItem sx={{ height: "50px", fontSize: 12 }} value={0}><div className='align'><img className="emoji" src={Emoji3} alt=" эмодзи 1" /><span>Быт</span></div></MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Calendar />

    </div>
  )
}

export default Profile