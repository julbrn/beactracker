import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';

function NotFound() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1)
    };

    const handleToMainPage = () => {
        navigate("/")
    };
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", alignItems: "center", gap: 4, height: "100vh" }}>
            <ErrorOutlineIcon sx={{ width: 70, height: 70 }} />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "center", sm: "flex-start" }, gap: 2 }}>
                <Typography variant="h3">404</Typography>
                <Typography variant="h5" sx={{ textAlign: "center" }}>Кажется, здесь совсем-совсем ничего нет...</Typography>
                <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                    <Button variant="outlined" onClick={handleReturn}>
                        Назад
                    </Button>
                    <Button variant="outlined" onClick={handleToMainPage}>
                        На стартовую страницу
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default NotFound