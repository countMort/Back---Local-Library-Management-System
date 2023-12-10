import { Router } from "express"
import { CheckToken } from "../middlewares/auth"
import books from "../../dbs/books.json"
import { updateBooks } from "../utils/books.util"
import { Book } from "../types/books.type"

const sample_book = books[0]
const book_keys = Object.keys(sample_book)
export const BooksRoute = Router()

BooksRoute.get("/", CheckToken, async (req, res, next) => {
  res.json(books)
})

BooksRoute.post("/", CheckToken, async (req, res, next) => {
  try {
    const new_book = {
      ...sample_book,
      title: req.body.title,
      id: Date.now(),
    }

    books.push(new_book)
    await updateBooks(books)
    res.status(200).send(new_book)
  } catch (error) {
    next(error)
  }
})

BooksRoute.put("/:id", CheckToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const body: any = req.body
    delete body.id
    const found_book_index = books.findIndex((book) => book.id === id)
    if (found_book_index > -1) {
      const updated_book = book_keys.reduce((pv, cv) => {
        return {
          ...pv,
          [cv]: body[cv],
        }
      }, {} as Book)
      books[found_book_index] = {
        ...updated_book,
        id: books[found_book_index].id,
      }
      updateBooks(books)
    } else {
      next({
        message: "No such a book with the given id",
        status: 404,
      })
    }
  } catch (error) {
    next(error)
  }
})

BooksRoute.delete("/:id", CheckToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const found_book_index = books.findIndex((book) => book.id === id)
    if (found_book_index > -1) {
      books.splice(found_book_index, 1)
      updateBooks(books)
      res.status(200).send("Successfuly Deleted!")
    } else {
      next({
        message: "No such a book with the given id",
        status: 404,
      })
    }
  } catch (error) {
    next(error)
  }
})
