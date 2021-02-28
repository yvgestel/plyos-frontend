import React, { createContext, useState } from 'react';
import DatabaseHelper from '../helpers/databaseHelper';

export const UserContext = createContext ({});


export const UserContextProvider = ({ children }) => {
    const db = new DatabaseHelper(); 

    const [currentUser, setCurrentUser] = useState({
        userMail: null,
        userId: null,
        darkMode: false,
    });

    function logOutUser () {
        setCurrentUser({
            ...currentUser,
            userMail: null
        })
        localStorage.removeItem("Token")
    }

    function logInUser (userMail, userId) {
        setCurrentUser({
            ...currentUser,
            userMail: userMail,
            userId: userId
        })
    }

    async function setActiveUser (token) {
        const [response] = await db.privateFetch("/user/profile", token);
        if (response) {
            setCurrentUser({
                ...currentUser,
                userMail: response.data.userData.email,
                userId: response.data.userData.userId
            })
        }
    }

    function setDarkMode (darkMode) {
        setCurrentUser({
            ...currentUser,
            darkMode: darkMode
        })
    }

    function setUserToken (token) {
        localStorage.setItem("Token", token)
    }

    function getUserToken () {
        return localStorage.getItem("Token")
    }

    const data = {
        currentUser,
        logOutUser,
        logInUser,
        setDarkMode,
        setUserToken,
        getUserToken,
        setActiveUser
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}