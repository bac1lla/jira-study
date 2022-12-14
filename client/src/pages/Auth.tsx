import React, {FC} from 'react';
import {Button, Input, Row} from "../styles/components";
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {AuthContent, AuthStyled} from "../styles/AuthStyled";


const Auth: FC = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <AuthStyled>
            <AuthContent>
                <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
                <Input padding="15px 20px" type="text" placeholder={"Введите email..."}/>
                <Input padding="15px 20px" type="text" placeholder={"Введите пароль..."}/>
                <Row>
                    <div>{isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
                        <Link to={isLogin ? LOGIN_ROUTE : REGISTRATION_ROUTE}>
                            {isLogin ? "Зарегистрироваться" : "Войти"}
                        </Link>
                    </div>
                    <Button>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
                </Row>
            </AuthContent>
        </AuthStyled>

    );
};

export default Auth;