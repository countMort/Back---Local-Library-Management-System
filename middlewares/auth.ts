import { RequestHandler } from "express"
// const jwt = require('jsonwebtoken')


export const check_token: RequestHandler = (req , res , next) => {
    next()
}