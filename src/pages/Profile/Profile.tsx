import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Emoji1 from "../../assets/emoji1.svg";
import Emoji2 from "../../assets/emoji2.svg";
import Emoji3 from "../../assets/emoji3.svg";
import Emoji4 from "../../assets/emoji4.svg";
import Emoji5 from "../../assets/emoji5.svg";
import "./profile.css";

function Profile() {
  return (
    <div>
      <FormControl sx={{ marginTop: 20, width: 170 }}>
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
    </div>
  )
}

export default Profile