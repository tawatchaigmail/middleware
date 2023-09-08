const express = require('express')
const app = express()


//const oracledb = require("oracledb");
const configDb = require('./config/configDb');

const knex = require("knex")(configDb.development.oracle);


const bodyParser = require('body-parser');
//const oraDb = require('./config/connectOra');
const sessions = require('express-session');
//const oracleDbStore = require('express-oracle-session')(sessions);

// var sessionStore = new oracleDbStore(dbConfig.development.sessionsOption);


const KnexSessionStore = require('connect-session-knex')(sessions);

const store = new KnexSessionStore({
                                    knex,
                                    tablename: 'kn_sessions', // optional. Defaults to 'sessions'
                                   });

const cookieParser = require("cookie-parser");

const autController = require('./controllers/aut.controller');
const route = require('./routes/index');
const routeAut = require('./routes/aut.route');


require("dotenv").config()

const port = process.env.PORT || 3002
// a variable to save a session
var session ;

const oneDay = 1000 * 60 * 60 * 24;

//const oneDay = process.env.SESSION_COOKIES_EXPIRE;


app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

/*
app.use(sessions({
*/
           /*
           genid: function(req) {
                   return genuuid() // use UUIDs for session IDs
           }, 
           */
/*
           secret : 'secrctekey',
           saveUninitialize : true ,
           cookie : { maxAge : oneDay } ,
           resave : false ,
 })); 
*/ 

// var connection = oracledb.getConnection(dbConfig.development.sessionsOption);
// var sessionStore = new oracleDbStore({}, oraDb.oraConnect);

app.use(sessions({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
//	store: sessionStore,
        store: store,
	resave: true,
        cookie : { maxAge : oneDay } ,
	saveUninitialized: true
}));

app.use( (req, res, next) => {

   res.setHeader('Access-Control-Allow-Origin', '*'); // domain 
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With,X-Custom-Header');
   res.setHeader('Access-Control-Allow-Credentials',true);

   req.session;
   console.log('use');
   console.log('id :'+req.session.id);
   console.log('authenticated :'+req.session.authenticated);
   if (req.session.authenticated) { 
      next();  
   } else {
      next();
     // res.sendFile('views/index.html',{root : __dirname});      
   }

})


/* GET home page. */

app.use('/auth',routeAut);

//app.use('/', autController.jwtValidate) ;

/*
app.use('/', autController.jwtValidate,(req, res,next) => {
 
   console.log('get home /'+req.session.authenticated);
   if (req.session.authenticated) {
     res.send("<a href=\ /auth/logout > click to log out </a> ");
     next() 
   } else {     
     res.sendFile('views/index.html',{root : __dirname});
   }
})
*/
app.use('/api',route)

app.listen(port, () => {
 // console.log(__dirname+__filename)
  console.log(process.env.SESSION_COOKIES_EXPIRE);
  console.log(` app listening on port ${port}`)

})