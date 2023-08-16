import React, {useState, useEffect} from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {description} from "../../utils/texts.js"
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
  } = useForm<Account>({mode: "all"});
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  const generateAvatars = () => {
    const promises: Promise<Response>[] = [];
    for (let i = 0; i < 3; i++) {
      promises.push(fetch(`${api}?seed=${Math.round(Math.random() * 1000)}`));
    }
    Promise.all(promises).then((responses: Response[])  => {
      const urls: string[] = responses.map((res) => res.url);
      setAvatars(urls);
    });
  };

  useEffect(() => {
    generateAvatars();
  }, []);

  return (
    <div className="auth">
    <p>{description}</p>
      <form className="auth__form" onSubmit={onSubmit} noValidate>
      <h4 className="auth__title">Регистрация</h4>
        <input
          {...register("username",
          {
            required: "Обязательное поле",
            minLength: {value: 3, message: "Логин должен содержать не менее 3 символов"}, pattern: {value: /^[A-Za-zА-Яа-я0-9_]{3,20}$/, message: "Логин может содержать только буквы, цифры и нижнее подчеркивание"}
          })}
          type="text"
          placeholder="Логин"
          name="username"
        />
        <p className="auth__error">{errors.username?.message}</p>
        <input
          {...register("password", { required: "Обязательное поле", minLength: {value: 7, message: "Пароль должен содержать не менее 7 символов"}, pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Пароль должен содержать латинские буквы и минимум 1 цифру"} })}
          type="password"
          placeholder="Пароль"
          name="password"
        />
        <p className="auth__error">{errors.password?.message}</p>
        <div className="auth__avatars-wrapper">
        <h4 className="auth__avatars-title">Выберите аватар</h4>
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
            <button className="generate-btn" onClick={generateAvatars} type="button">
                Ещё
              </button>
        </div>
        <button disabled={errors.username || errors.password || (selectedAvatar === undefined) ? true : false} type="submit">Готово!</button>
        <span>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
