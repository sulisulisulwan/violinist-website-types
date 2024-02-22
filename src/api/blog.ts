import { ParsedHTMLComponent } from "./sharedTypes"

export type BlogItemAPI = {
  id: number
  title: string
  dateCreated: string
  dateLastModified: string
  components: ParsedHTMLComponent[]
}

export type BlogItemMYSQL = {
  id: number
  title: string
  dateCreated: string
  dateLastModified: string
  components: string
}