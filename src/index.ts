import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { BooksRoute } from "./routes/books.route"
import bodyParser from "body-parser"
import { ErrorHandler } from "./middlewares/general"
import cookieParser from "cookie-parser"
import sessions from "express-session"

dotenv.config()
const app = express()

const oneDay = 1000 * 60 * 60 * 24;
const secret = process.env.SECRET || ''
const app_sessions = sessions({
  secret,
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
})
app.use(app_sessions)
app.use(cookieParser());


const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/book", BooksRoute)

app.use(ErrorHandler)

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
