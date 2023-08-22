import { useForm } from "react-hook-form";
import { TextField, Box, Button, Typography, Link } from '@mui/material';
type Account = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Account>({ mode: "all" });
  const onSubmit = handleSubmit((data) => { });
  console.log(errors);

  return (
    <div className="auth">
      <Box component="form" className="auth__form" onSubmit={onSubmit} noValidate>
        <Typography className="auth__title">Вход</Typography>
        <TextField label="Логин" id="outlined-error" style={{ width: 300 }} margin="normal" required error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username",
            {
              required: "Обязательное поле",
              minLength: { value: 3, message: "Логин должен содержать не менее 3 символов" }, pattern: { value: /^[A-Za-zА-Яа-я0-9_]{3,20}$/, message: "Логин может содержать только буквы, цифры и нижнее подчеркивание" }
            })}
          name="username"
        />
        <TextField label="Пароль" type="password" style={{ width: 300 }} margin="normal" variant="outlined" required error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Обязательное поле", minLength: { value: 7, message: "Пароль должен содержать не менее 7 символов" }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль должен содержать латинские буквы и минимум 1 цифру" } })}
          name="password"
        />
        <Button sx={{ marginTop: 3 }} variant="contained" disabled={errors.username || errors.password ? true : false} type="submit">Войти!</Button>
        <Typography><Box sx={{ textAlign: "center", marginTop: 2 }}>Ещё нет аккаунта? <Link href="/register">Регистрация</Link></Box>
        </Typography>
      </Box>
    </div >
  );
}

export default Login;
