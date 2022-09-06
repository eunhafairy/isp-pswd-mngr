import axios from 'axios';

class UserService{


   login(loginData) {

      axios.post("http://localhost:3001/api/users/login", loginData).then(response  => {
         console.log(response)
      });

   }



}

export default UserService