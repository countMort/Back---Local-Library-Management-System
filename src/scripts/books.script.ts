import { writeFile } from "fs/promises"
import books from "../../dbs/books.json"
import { join } from "path"
import { updateBooks } from "../utils/books.util"

type Book = (typeof books)[0] & {
  id: number
}

export const createBookIds = async () => {
  try {
    const date = Date.now()
    const books_with_id: Book[] = books.map((book, index) => {
      return {
        ...book,
        id: date + index,
      }
    })
    await updateBooks(books_with_id)
  } catch (error) {
    console.error(error)
  }
}
