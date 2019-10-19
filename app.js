const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const methodOverride= require('method-override');
const passport      = require('passport');
const localStratergy= require('passport-local');

const User          = require('./models/user');

const authroutes    = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/oshack',{useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.static('assets'));

// PASSPORT CONFIG

app.use(require('express-session')({
    secret  : 'there are no secrets',
    resave: false,
    saveUninitialized   : false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) =>{
    res.locals.currUser = req.user;
    next()
});

passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authroutes);

app.get('/', (req,res) => {
    res.send("HOME PAGE");
})

app.listen(8000, () => {
    console.log('SEVER INITIATED');
})