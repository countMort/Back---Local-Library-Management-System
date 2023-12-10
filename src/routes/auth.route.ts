import { Router } from "express"
import { user } from "../parameters/parameters"

export const AuthRouter = Router()

AuthRouter.post("/login", (req, res, next) => {
  if (req.body.username == user.name && req.body.password == user.password) {
    user.session = req.session
    user.session.user = req.body.username
    res.status(200).send("Successfuly Logged in!")
  } else {
    next({
      message: "Invalid username or password",
      statusCode: 401
    })
  }
})

AuthRouter.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    next(err)
  })
  res.redirect("/")
})
