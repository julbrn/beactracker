import { useState, useEffect } from "react";
import "./register.css";
import { TextField, Box, Button, Typography, Link } from '@mui/material';
import { useForm } from "react-hook-form";

type Account = {
  username: string;
  password: string;
};

function Register() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<number | undefined>(undefined);
  const api = "https://api.dicebear.com/6.x/adventurer-neutral/svg";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Account>({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  const generateAvatars = () => {
    const promises: Promise<Response>[] = [];
    for (let i = 0; i < 3; i++) {
      promises.push(fetch(`${api}?seed=${Math.round(Math.random() * 1000)}`));
    }
    Promise.all(promises).then((responses: Response[]) => {
      const urls: string[] = responses.map((res) => res.url);
      setAvatars(urls);
    });
  };

  useEffect(() => {
    generateAvatars();
  }, []);

  return (
    <div className="auth">
      <Box component="form" className="auth__form" onSubmit={onSubmit} noValidate>
        <Typography >Регистрация</Typography>
        <TextField label="Логин" style={{ width: 300 }} margin="normal" id="outlined-error" required error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username",
            {
              required: "Обязательное поле",
              minLength: { value: 3, message: "Логин должен содержать не менее 3 символов" }, pattern: { value: /^[A-Za-zА-Яа-я0-9_]{3,20}$/, message: "Логин может содержать только буквы, цифры и нижнее подчеркивание" }
            })}
          name="username"
        />
        <TextField label="Пароль" style={{ width: 300 }} variant="outlined" margin="normal" type="password" required error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Обязательное поле", minLength: { value: 7, message: "Пароль должен содержать не менее 7 символов" }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль должен содержать латинские буквы и минимум 1 цифру" } })}
          name="password"
        />
        <div className="auth__avatars-wrapper">
          <Typography>Выберите аватар*</Typography>
          <div className="auth__avatars">
            {avatars.map((avatar, index) => {
              return (
                <img
                  key={index} className={`auth__avatar ${selectedAvatar === index ? "selected" : ""}`}
                  src={avatar}
                  alt="Вариант фото профиля"
                  onClick={() => setSelectedAvatar(index)}
                />
              );
            })}

          </div>
          <Button onClick={generateAvatars} size="small" variant="outlined">
            Ещё
          </Button>
        </div>
        <Button variant="contained" sx={{ marginTop: 3 }} disabled={errors.username || errors.password || (selectedAvatar === undefined) ? true : false} type="submit">Готово!</Button>
        <Typography ><Box sx={{ textAlign: "center", marginTop: 2 }}>
          Уже есть аккаунт? <Link href="/login">Войти</Link></Box>
        </Typography>
      </Box>
    </div>
  );
}

export default Register;
