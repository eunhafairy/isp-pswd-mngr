import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login() {
    // state = {  } 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleInputEmail = (event) =>{
        setEmail(event.target.value);
    };

    const handleInputPassword = (event) =>{
        setPassword(event.target.value);
    };

    const login = (event) => {
        
        let loginData = {
            email: email,
            password: password
        }

        axios.post("http://localhost:3001/api/users/login", loginData).then(response  => {

         console.log(response)

        })
    }




    return (

        <div className="Login">
            <h1>Hello World!</h1>
            <form>
                <input placeholder='enter username' value={email} onChange={handleInputEmail} />
                <input placeholder='enter password' value={password} onChange={handleInputPassword}  />
                <button onClick={login()}>sign in</button>
            </form>
            {/* links */}
            <Link to="/register">  <button>register</button></Link>
        </div>


    );

}
 
export default Login;