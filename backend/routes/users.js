const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
// const multer = require('multer');


router.post("/login", (req,res,next) => {

    let fetchedUser ;
    let haveAccount;

    //does email exist?
    User.findOne({ email: req.body.email})
    .then(user =>{
       
        if(!user){
            console.log("NO ACCOUNT");
            haveAccount = false;
            return res.status(401).json({message: 'No account found'});
        }
        else if(user.status === 'Archive'){
            haveAccount = false;
            return res.status(401).json({message: 'Your account is archived. Contact admin to restore your account!'});
        }
        else{
            console.log("FETCHING USER");
            haveAccount = true;
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);

        }
        
     
    })
    .then(result =>{
   
            if(!result){
                return res
                .status(401)
                .json({       
                    message: 'Wrong password'
                });
            }


        //create json web token for authentication 
      
        if(haveAccount){

            const token = jwt.sign(
                {email: fetchedUser.email, u_id: fetchedUser._id, role: fetchedUser.role },
                'secret_this_should_be_longer', { expiresIn: "1h" }
            );
    
    
            res.status(200).json({
    
                token:token,
                expiresIn: 3600,
                u_id: fetchedUser._id,
                role: fetchedUser.role,
                course: fetchedUser.course,
                year: fetchedUser.year, 
                section: fetchedUser.section,
                status: fetchedUser.status
    
            });
        

        }

    })
    .catch(err =>{

        console.log(err);

        return res.status(401).json({
        message: 'Error occurred',
        error: err
    });

    })
})

module.exports = router;