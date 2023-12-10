import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { BooksRoute } from "./routes/books.route"
import bodyParser from "body-parser"
import { ErrorHandler } from "./middlewares/general"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/book", BooksRoute)

app.use(ErrorHandler)

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
