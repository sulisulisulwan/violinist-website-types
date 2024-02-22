import { ParsedHTMLComponent } from "./sharedTypes"

export type BiographyAPIData = {
  longFormId: number
  shortFormId: number
  results: BiographyItemAPI[]
}

export type BiographyItemMYSQL = {
  id: number
  name: string
  components: string
}

export type LongShortFormBioMYSQL = {
  id: number
  bioId: number
}

export type BiographyItemAPI = {
  id: number
  name: string
  components: ParsedHTMLComponent[]
}
