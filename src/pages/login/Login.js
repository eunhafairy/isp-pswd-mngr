import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component {
    // state = {  } 

    render() { 
        return (

            <div className="Login">
                <h1>Hello World!</h1>
                <input placeholder='enter username' />
                <input placeholder='enter password' />
                {/* links */}
                <Link to="/home"> <button>sign in</button></Link> |{" "}
                <Link to="/register">  <button>register</button></Link>
            </div>


        );
    }
}
 
export default Login;