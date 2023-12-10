import { RequestHandler } from "express"
import { user } from "../parameters/parameters"

export const CheckToken: RequestHandler = (req, res, next) => {
  user.session = req.session
  if (user.session.user) {
    next()
  } else {
    res.status(401).send("You need to login first")
  }
}
