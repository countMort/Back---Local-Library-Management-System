import { writeFile } from "fs/promises"
import { join } from "path"
import { Book } from "../types/books.type"

export const updateBooks = (books: Book[]) => {
  return writeFile(join(process.cwd(), "dbs", "books.json"), JSON.stringify(books))
}
