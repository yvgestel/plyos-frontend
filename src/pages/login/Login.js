import React, { Fragment, useState, useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import "./Login.css";

import { Button } from '../../components/atoms/button/Button';
import { Input } from '../../components/atoms/input/Input';

import DatabaseHelper from '../../helpers/databaseHelper';
import { UserContext } from '../../context/UserContextProvider';

export const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [signUpPage, setSignUpPage] = useState(false);
    const { logInUser, setUserToken } = useContext(UserContext);
    const history = useHistory();

    const db = new DatabaseHelper ()

    const logIn = async ({email, password}) => {
        const user = {
          email: email,
          password: password
        };
 
        const [response, error] = await db.logIn(user);
        if (response) {
          setUserToken(response.token)
          logInUser(user.email, response.id);
          history.location.state ? history.push(history.location.state.from): history.push("/")
        } else {
          console.log(error)
        }
    };

    const setSignUp = () => {
        setSignUpPage(!signUpPage);
    };

    const signUp = () => {
        console.log("You clicked SIGN UP");
        //extra validation ?
        //hashing ?
        //post request
        //const newUser = {
        //  email: "",
        //  password: ""
        //};
    };

    const forgotPassword = () => {
        console.log("You forgot your password..")
    };

    return (
      <Fragment>
        <form className="login-section">
            <Input 
                id="email" 
                name="email" 
                label="Email" 
                type="text" 
                className="input-list" 
                register={register(
                    {
                      required: {
                        value: true,
                        message: 'Dit veld mag niet leeg zijn',
                      }
                    }
                  )}
                error={errors.email}    
            />
            <Input 
                id="password" 
                name="password" 
                label="Password" 
                type="password" 
                className="input-list" 
                register={register(
                    {
                      required: {
                        value: true,
                        message: 'Dit veld mag niet leeg zijn',
                      },
                      // minLength: {
                      //     value: 8,
                      //     message: 'Een wachtwoord moet minimaal 8 tekens zijn'
                      // }
                    }
                  )}
                error={errors.password}    
            />
            {signUpPage && 
                <Input 
                    id="password_repeat" 
                    name="password_repeat" 
                    label="Confirm password" 
                    type="password" 
                    className="input-list" 
                    register={register(
                        {
                          required: {
                            value: true,
                            message: 'Dit veld mag niet leeg zijn',
                          }
                        }
                      )}
                    error={errors.password_repeat}    
                />
            }
            {!signUpPage ?
                <Fragment>
                    <Button onClick={handleSubmit(logIn)}
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
                <Button onClick={handleSubmit(signUp)}
                type="submit"
                className="btn-primary"
                >Sign up</Button>
            }
            <span></span>
        </form>
      </Fragment>
    );
};
