const express = require('express');
const User = require('../models/user');
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', (req, res, next) => {

    let newUser = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        authLevel: req.body.authLevel
    };

    User.getUserByName(newUser.username, (err, user)=>{
        if(err) {
            res.json({
                success: false,
                msg: "Failed to connect"
            });
        }

        if(user){
            res.json({
                success: false,
                msg: "User already exists!"
            });
        }else {
            User.addUser(newUser, (err, user)=>{
                if(!err){
                    res.json({
                        success: true,
                        msg: "User created"
                    });
                    console.log('error: '+err)
                    console.log(user)
                } else {
                    res.json({
                        success: false,
                        msg: "Failed to create user"
                    })
                }
            });
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    User.getUserByName(username, (err, user)=>{
        if (err) {
            res.json({
                success: false,
                msg: "Error: "+err
            });
        }

        if(!user){
            res.json({
                success:false,
                msg: 'User not found'
            })
        } else {
            User.comparePassword(password, user.password, (err, isMatch)=>{
                if(err){
                    res.json({
                        success: false,
                        msg: "An error occurred"
                    })
                }else {
                    if(isMatch){
                        const token = jwt.sign(user.toObject(), config.secret, {
                            expiresIn: "7d"
                        });
    
                        res.json({
                            success: true,
                            msg: "successfully authenticated",
                            token: token,
                            username: user.username,
                            email: user.email,
                            authLevel: user.authLevel
                        });
                    }else{
                        res.json({
                            success: false,
                            msg: "Wrong Password"
                        });
                    }
                }   
            });
        }
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    User.getUserById(req.user._id, (err, user)=>{
        res.json(user);
    })
});

module.exports = router;