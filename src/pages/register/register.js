import React from 'react';
import { Link } from "react-router-dom";
import {useState} from 'react';


function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleInputName = (event) =>{
        setName(event.target.value);
    };

    const handleInputEmail = (event) =>{
        setEmail(event.target.value);
    };

    const handleInputPassword = (event) =>{
        setPassword(event.target.value);
    };



        return (

            <div className="Register">
                <h1>Hello World from Register!</h1>
                <input placeholder='name' value={name} onChange={handleInputName}/>
                <input placeholder='email'  value={email} onChange={handleInputEmail}/>
                <input placeholder='password'  value={password} onChange={handleInputPassword}/>
                {/* links */}
                <Link to="/sign-in"><button>back to login</button></Link>
            </div>


        );
}
 
export default Register;