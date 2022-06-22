const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
require("./passport-setup")

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())
 
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }));

const isLoggedIN = (req,res,next) =>{
  if(req.user){
    next();
  }else{
    res.sendStatus(401);
  }
}


app.use(express.static(path.join(__dirname, 'my-frontend')));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req,res)=> res.send("you are not  loged in"))
app.get('/failure',(req,res)=> res.send("you are failed to loged in"))
app.get("/good",isLoggedIN,(req,res)=> res.sendFile(path.resolve(__dirname, "my-frontend", "build", "index.html")));




app.get('/',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', { failureRedirect: '/failure'}),
    function(req,res){
      res.redirect('/good');
    });

app.get('/logout',(req,res) => {
  req.session = null;
  req.logOut();
  res.redirect('/');
})

app.listen(3000, ()=> console.log("app listening on port 3000"))