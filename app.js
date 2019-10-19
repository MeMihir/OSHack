const express   = require('express');
const app       = express();
const bodyParser= require('body-parser');
const mongoose  = require('mongoose');


mongoose.connect(process.env.DB_URL,{useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
app.use(express.static('assets'));

//PASSPORT CONFIG
// app.use(require('express-session')({
//     secret  : process.env.PASSPORT_SECRET,
//     resave: false,
//     saveUninitialized   : false
// }))
// app.use(passport.initialize());
// app.use(passport.session());
// app.use((req, res, next) =>{
//     res.locals.currUser = req.user;
//     next()
// });

app.get('/', (req,res) => {
    res.send("HOME PAGE");
})

app.listen(8000, () => {
    console.log('SEVER INITIATED');
})