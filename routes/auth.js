const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

const User      = require('../models/user');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})

router.post('/signup', (req, res) => {
    const newUser = req.body.user
    User.register(new User(newUser), req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            res.redirect('/signup');
        }
        else {
            // passport.authenticate('local')(req, res, () => {
            //     console.log('Logged In');
            // })
            res.redirect('/');
        }
    })
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', passport.authenticate('local',{
    successRedirect : '/',
    failureRedirect : '/login'
}))

router.get('logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports  = router;