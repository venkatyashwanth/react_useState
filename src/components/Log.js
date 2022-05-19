import React, { useState } from 'react'
import Userlogin from './Userlogin';
import Guestlogin from './Guestlogin';

export default function Log() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const changeLog = () =>{
        return isLoggedIn?setIsLoggedIn(false):setIsLoggedIn(true);
    }
    return (
        <>
            {isLoggedIn? <Userlogin/> : <Guestlogin/>}
            <input type="button" value="Click" onClick={changeLog}/>
        </>
    )
}
