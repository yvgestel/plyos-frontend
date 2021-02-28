import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../context/UserContextProvider';



export const PrivateRoute = ({ children, ...rest }) => {
    const [loading , setLoading]  = useState(true)
    const { currentUser, getUserToken, setActiveUser } = useContext(UserContext)

    useEffect(() => {
        const getUser = async (token) => {
            await setActiveUser(token);
            setLoading(false)
        }
        
        if (currentUser.userMail) {
            setLoading(false)
        } else {
            const token = getUserToken()
            if (token) {
                getUser(token)
            } else {
                setLoading(false)
            }
        }
    },[])    

    return (
        loading === true 
        ?
            <span>Loading..</span>
        :
            <Route
                {...rest}
                render={({ location }) =>
                currentUser.userMail ? (
                        children
                    ) : (
                        <Redirect 
                            to={{
                                pathname: "/login",
                                state: { from: location}
                            }}
                        />  
                    )
                }
            />
    );
};
