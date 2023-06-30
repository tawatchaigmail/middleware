const users = require('../models/users.model')
const jwt = require("jsonwebtoken")
const fnjwt = require('./jwtcreete');
module.exports = autController = { 
   login : (req, res) => { 
                            const name = req.body.username ; 
                            const user = users.findIndex((e) => e.name === name);                                  
                            if (!name || user < 0) {
                                 console.log('invalid user name : '+name);
                                 res.send(' invalid user name')    // Bad credentials     
                                // return res.send(400) ;
                            
                            } else {      
                            
                            session = req.session ;
                            req.session.authenticated = true; 
                            req.session.username = req.body.username ;                           

                            const access_token = fnjwt.jwtGenerate(session)
                            const refresh_token = fnjwt.jwtRefreshTokenGenerate(session)
                          //  console.log('access_token : '+access_token);
                          //  console.log('refresh_token :'+refresh_token);   
                          //  console.log(req.session.username);

                            users[user].refresh = refresh_token

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
                          const user = users.find(
                                           //     (e) => e.id === req.user.id && e.name === req.user.name
                                               (e) => e.name === req.user.name
                          )

                          console.log('req.user.name '+req.user.name);
                          console.log('user '+'name '+ user['name']+' id '+ user['id']+', refresh '+ user['refresh']);
                          console.log(users[user['id']]);
                          console.log('--');
                          const userIndex = users.findIndex((e) => e.refresh === req.user.token)

                       //   if (!user || userIndex < 0) return res.sendStatus(401)
                          if (!user < 0) return res.sendStatus(401)

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
  },
 auth : (req, res, next) => {
                              console.log(req.headers.authorization); 
                              if(req.headers.authorization === "")
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
                                                  console.log('token '+token);
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