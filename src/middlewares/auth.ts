import { RequestHandler } from "express"
// const jwt = require('jsonwebtoken')


export const CheckToken: RequestHandler = (req , res , next) => {
    // let token = req.headers['x-access-token'] || req.headers["authorization"]
    // let checkBearer = "Bearer "

    // if(token) {
    //     if(token.startsWith(checkBearer)) {
    //         token = token.slice(checkBearer.length , token.length)
    //     }
    //     jwt.verify(token , process.env.SECRET , (err , decoded) => {
    //         if (!err) req.decoded = decoded ;
    //     })
    // }
    next()
}