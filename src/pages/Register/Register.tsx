import React, {useState, useEffect} from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
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
  } = useForm<Account>({mode: "onBlur"});
  const onSubmit = handleSubmit((data) => {});

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

  console.log(errors);

  useEffect(() => {
    generateAvatars();
  }, []);

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
      <h4 className="auth__title">Регистрация</h4>
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
        <div className="auth__avatars-wrapper">
        <h4 className="auth__avatars-title">Выберите аватар</h4>
        <div className="auth__avatars">
              {avatars.map((avatar, index) => {
                return (
                    <img
                    key={index} className={`auth__avatar ${selectedAvatar === index ? "selected" : ""}`}
                      src={avatar}
                      alt="avatar"
                      onClick={() => setSelectedAvatar(index)}
                    />
                );
              })}
   
            </div>
            <button className="generate-btn" onClick={generateAvatars} type="button">
                Ещё
              </button>
        </div>
        <button disabled={errors.username || errors.password ? true : false} type="submit">Готово!</button>
        <span>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
