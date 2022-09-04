import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    // state = {  } 
    render() { 
        return (

            <div className="Home">
                <h1>Hello World from Home!</h1>
           

                {/* links */}
                <Link to="/sign-in">     <button>back to login</button></Link>
            </div>


        );
    }
}
 
export default Home;