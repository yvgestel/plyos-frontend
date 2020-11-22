import React, { Fragment } from 'react';
import "./Login.css";

import { Button } from '../button/Button';
import { Input } from '../../components/input/Input';

export const Login = () => {
    return (
        <Fragment>
            <form className="login-section">
                <Input id="email" text="Email" className="" type="text"></Input>
                <Input id="password" text="Password" className="" type="text"></Input>
                <Button onClick={() => {console.log("You clicked LOGIN")}}
                type="text"
                className="btn-primary"
                >Log in</Button>
                <Button onClick={() => {console.log("You clicked SIGN UP")}}
                type="text"
                className="btn-secondary"
                >Sign up</Button>
                <Button onClick={() => {console.log("You clicked FORGOT PASSWORD")}}
                type="text"
                className="btn-tertiary"
                >Forgot my password</Button>
            </form>
        </Fragment>
    );
};
