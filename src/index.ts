import express from "express"
import dotenv from "dotenv"
import { BooksRoute } from "../routes/books"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(BooksRoute)

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
