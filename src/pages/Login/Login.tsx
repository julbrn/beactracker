import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
type Account = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Account>({mode: "onBlur"});
  const onSubmit = handleSubmit((data) => {});
  console.log(errors);

  return (
    <div className="auth">
    <p>
        Дневник поведенческой активации Здесь будет информация о том, для кого
        этот сайт и как им пользоваться. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Error reprehenderit, obcaecati, repellendus odio
        consequatur consectetur quisquam, architecto doloribus expedita harum
        voluptatibus reiciendis in est. Sint quod voluptatibus neque fuga alias.
        Дневник поведенческой активации Здесь будет информация о том, для кого
        этот сайт и как им пользоваться. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Error reprehenderit, obcaecati, repellendus odio
        consequatur consectetur quisquam, architecto doloribus expedita harum
        voluptatibus reiciendis in est. Sint quod voluptatibus neque fuga alias.
        Здесь будет информация о том, для кого этот сайт и как им пользоваться.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        reprehenderit, obcaecati, repellendus odio consequatur consectetur
        quisquam, architecto doloribus expedita harum voluptatibus reiciendis in
        est. Sint quod voluptatibus neque fuga alias.
      </p>
      <form className="auth__form" onSubmit={onSubmit} noValidate>
      <h4 className="auth__title">Вход</h4>
        <input
          {...register("username",
          {
            required: "Обязательное поле",
            minLength: {value: 3, message: "Логин должен содержать не менее 3 символов"}, pattern: {value: /^[A-Za-zА-Яа-я0-9_]{7,29}$/, message: "Имя может содержать только буквы, цифры и нижнее подчеркивание"}
          })}
          type="text"
          placeholder="Имя"
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
        <button type="submit">Войти</button>
        <span>
          Ещё нет аккаунта? <Link to="/register">Регистрация</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
