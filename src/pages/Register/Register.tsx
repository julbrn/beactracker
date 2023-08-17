import React, { useState, useEffect } from "react";
import "./register.css";
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { description, description2 } from "../../utils/texts.js";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

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
  } = useForm<Account>({ mode: "all" });
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
      <div className="cards">

        <Card variant="outlined" sx={{ maxWidth: 700 }}>
          <CardMedia
            component="img"
            sx={{ paddingInline: 3, paddingTop: 3 }}
            height="194"
            image="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt="Paella dish"
          />
          <Typography sx={{ padding: 3 }} variant="body1">{description}</Typography></Card>

      </div>
      <Box component="form" className="auth__form" onSubmit={onSubmit} noValidate>
        <Typography >Регистрация</Typography>
        <TextField label="Логин" id="outlined-error" required error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username",
            {
              required: "Обязательное поле",
              minLength: { value: 3, message: "Логин должен содержать не менее 3 символов" }, pattern: { value: /^[A-Za-zА-Яа-я0-9_]{3,20}$/, message: "Логин может содержать только буквы, цифры и нижнее подчеркивание" }
            })}
          name="username"
        />
        <TextField label="Пароль" variant="outlined" required error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Обязательное поле", minLength: { value: 7, message: "Пароль должен содержать не менее 7 символов" }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль должен содержать латинские буквы и минимум 1 цифру" } })}
          name="password"
        />
        <div className="auth__avatars-wrapper">
          <Typography>Выберите аватар</Typography>
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
          <Button onClick={generateAvatars} variant="outlined">
            Ещё
          </Button>
        </div>
        <Button variant="contained" disabled={errors.username || errors.password || (selectedAvatar === undefined) ? true : false} type="submit">Готово!</Button>
        <Typography ><Box sx={{ textAlign: "center", marginTop: 2 }}>
          Уже есть аккаунт? <Link href="/">Войти</Link></Box>
        </Typography>
      </Box>
    </div>
  );
}

export default Register;
