import React, { Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";

import { Button } from '../../components/atoms/button/Button';
import { Input } from '../../components/atoms/input/Input';
import { Redirect, useLocation } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const location = useLocation();
    const [signUpPage, setSignUpPage] = useState(false);

    const logIn = () => {
        console.log("You clicked LOGIN");
        //localStorage.setItem("user", "testUser")
    };

    const setSignUp = () => {
        setSignUpPage(!signUpPage);
    };

    const signUp = () => {
        console.log("You clicked SIGN UP");
    };

    const forgotPassword = () => {
        console.log("You forgot your password..")
    };

    const onSubmit = (data) => {
        console.log("You LOGGED IN");
        console.log(data);
        console.log(errors)
    }

    return (
        <Fragment>
            {localStorage.getItem("user") 
            ? <Redirect to={location.state.form || "/"} />
            : 
                <form className="login-section" onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" text="Email" type="text" className="input-list" inputRef={register({ required: true })}/>
                    <Input name="password" text="Password" type="text" className="input-list" inputRef={register({ required: true })}/>
                    {signUpPage && 
                        <Input name="password_repeat" text="Confirm password" type="text" className="input-list" inputRef={register({ required: true })}/>
                    }
                    {!signUpPage ?
                        <Fragment>
                            <Button onClick={logIn}
                            type="submit"
                            className="btn-primary"
                            >Log in</Button>
                            <Button onClick={setSignUp}
                            type="text"
                            className="btn-secondary"
                            >Sign up</Button>
                            <Button onClick={forgotPassword}
                            type="text"
                            className="btn-tertiary"
                            >Forgot my password</Button>
                        </Fragment>
                    :
                        <Button onClick={signUp}
                        type="submit"
                        className="btn-primary"
                        >Sign up</Button>
                    }
                </form>
            }
        </Fragment>
    );
};
