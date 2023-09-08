//const users = require('../models/users.model');
const human = require('../models/humans.model');
const jwt = require("jsonwebtoken")
const fnjwt = require('./jwtcreete');
module.exports = autController = { 
   login : (req, res) => { 
                            let param = {
                                         "humanid" : req.body.username ,
                                         "compid" : req.body.company
                            };  
                            const user = human.getById(param);
                          //  const user = users.findIndex((e) => e.name === name);                                  
                            if (!user) {
                                 console.log('invalid user name : '+user);
                                 res.send(' invalid user name')    // Bad credentials     
                                // return res.send(400) ;
                            
                            } else {      

                            session = req.session;                                                        
                            req.session.authenticated = true; 
                            req.session.username = param.humanid ;                           
                            req.session.company = param.compid ;
                            
                            const access_token = fnjwt.jwtGenerate(session)
                            const refresh_token = fnjwt.jwtRefreshTokenGenerate(session)
                          //  console.log('access_token : '+access_token);
                          //  console.log('refresh_token :'+refresh_token);   

                            user.refresh = refresh_token

                           // res.send("<a href=\ /auth/logout > click to log out </a> ");
                            res.json({
                                      access_token,
                                      refresh_token,
                              })
                            } 

      /*
      if (req.body.username == username && req.body.password == password){
         console.log('gen');
      }  else {
             
      }
      */
   },
  logout : (req, res) => {
                          console.log('logout');
                          req.session.destroy();
                          res.redirect('/');
   },
  refresh : (req, res) =>{
                          console.log('refresh');

                          const user = req.user;
                          console.log('req.user '+req.user);
                         // console.log('user '+'name '+ user['name']+' id '+ user['id']+', refresh '+ user['refresh']);
                         // const userIndex = users.findIndex((e) => e.refresh === req.user.token)

                          if (!user) return res.sendStatus(401)

                          const access_token = fnjwt.jwtGenerate(user)
                          const refresh_token = fnjwt.jwtRefreshTokenGenerate(user)
                         // users[userIndex].refresh = refresh_token
                         // users[user['name']].refresh = refresh_token
                          return res.json({
                             access_token,
                             refresh_token,
                          })

  },

 jwtValidate : (req, res, next) => {
                                   
                               if (req.session.authenticated) {
                                   //   res.send("<a href=\ /auth/logout > click to log out </a> ");
                                      next() 
                               } else {     
   
                               try {
                                   console.log('jwtvalidate');
                                   if (!req.headers["authorization"]) return res.sendStatus(401)

                                   // const token = req.headers["authorization"].replace("Bearer ", "")
                                    const token = req.headers["authorization"]
                                    console.log('token '+token);
                                    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                                                                                                      //   if (err) throw new Error(error)
                                                                                                         console.log('decoded '+decoded);    
                                      })
                                   next()
                                   } catch (error) {
                                        console.log(error)
                                        return res.sendStatus(403)
                                 }
                              } // if authenticated
  },
 auth : (req, res, next) => {
                              console.log(req.headers.authorization); 
                             // if(req.headers.authorization === "")
                              if (req.session.authenticated)
                                  next(); 
                              else
                          //  res.send(Unauthorized)
                              res.status(401);
 },

jwtRefreshTokenValidate : (req, res, next) => {
                                           try {
                                                console.log('jwtRefresh');
                                                if (!req.headers["authorization"]) return res.sendStatus(401)
                                                  const token = req.headers["authorization"].replace("Bearer ", "")
                                                  console.log('verify token '+token);
                                                  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                                                                                                    if (err) throw new Error(error)
                                                                                                     console.log('decoded :'+decoded);
                                                                                                     req.user = decoded                                                                                                     
                                                                                                     req.user.token = token                                                                                                     
                                                                                                     delete req.user.exp                                                                                                     
                                                                                                     delete req.user.iat
                                                                                                     
                                                   })
                                                 next()
                                               } catch (error) {
                                                 console.log(error)
                                                 return res.sendStatus(403)
                                               }
 }

};