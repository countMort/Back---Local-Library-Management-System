import { Router } from "express"
import  { check_token } from "../middlewares/auth"

export const BooksRoute = Router()

BooksRoute.get("/book", check_token, async (req, res) => {
    res.send("first route")
})