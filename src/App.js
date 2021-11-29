import "./assets/reset.css";
import "./assets/globalStyles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Introduction from './components/pages/Introduction.js';
import Subscribe from './components/pages/Subscribe.js';
import Details from './components/pages/Details.js';
import Welcome from './components/pages/Welcome.js';
import Address from './components/pages/Address.js';
import SignIn from './components/pages/SignIn.js';
import SignUp from './components/pages/SignUp.js';
import UserContext from "./contexts/UserContext";

function App() {

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user")) || {});
    const [ subInfo, setSubInfo ] = useState({});

    return (
        <UserContext.Provider value={{user, setUser, subInfo, setSubInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/welcome' exact element={<Welcome/>}/>
                    <Route path='/sign-in' exact element={<SignIn/>}/>
                    <Route path='/sign-up' exact element={<SignUp/>} />
                    <Route path='/subscription/details' exact element={<Details/>} />
                    <Route path='/subscription/intro' exact element={<Introduction/>} />
                    <Route path='/subscription/new' exact element={<Subscribe/>} />
                    <Route path='/subscription/address' exact element={<Address/>} />
                    <Route path='*' element={<Navigate to="/welcome" replace />} />    
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
