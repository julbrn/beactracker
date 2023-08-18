import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/landing1.svg";
import Image2 from "../../assets/landing2.svg";
import Image3 from "../../assets/landing3.svg"

function Landing() {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register")
    };
    return (
        <Box sx={{ paddingTop: "6rem", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Typography variant="h4">Онлайн-дневник поведенческой активации</Typography>
            <Button variant="contained" onClick={handleRegister} sx={{ paddingInline: 3, paddingBlock: 1, fontSize: 16 }}>Начать вести дневник</Button>
            <Grid container spacing={4} sx={{ margin: "0 auto", maxWidth: 700 }}>
                <Grid item xs={6} >
                    <img src={Image1} width="90%" height="90%"></img>
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", maxWidth: 400 }}>
                    <Typography variant="h6">Планируйте свою активность</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", maxWidth: 400 }}>
                    <Typography variant="h6">Делитесь записями со своим психотерапевтом</Typography>
                </Grid>
                <Grid item xs={6} >
                    <img src={Image2} width="100%" height="100%"></img>
                </Grid>
                <Grid item xs={6} >
                    <img src={Image3} width="100%" height="100%"></img>
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", alignItems: "center", maxWidth: 400 }}>
                    <Typography variant="h6">Фиксируйте полученный уровень удовольствия и отслеживайте изменения в настроении</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Landing