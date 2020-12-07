import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
    let user = localStorage.getItem("user");

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};
