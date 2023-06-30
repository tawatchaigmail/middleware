const jwt = require("jsonwebtoken")

module.exports.jwtGenerate = (user) => {
  const accessToken = jwt.sign(
                              { name: user.username, id: user.id },
                              process.env.ACCESS_TOKEN_SECRET,
                              { expiresIn: "3m", algorithm: "HS256" }
  )

  return accessToken
}

module.exports.jwtRefreshTokenGenerate = (user) => {
  const refreshToken = jwt.sign(
                               { name: user.username, id: user.id },
                               process.env.REFRESH_TOKEN_SECRET,
                               { expiresIn: "1d", algorithm: "HS256" }
  )

  return refreshToken
}


