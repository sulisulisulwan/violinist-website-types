export type HTMLTag = keyof HTMLElementTagNameMap

export type ParsedHTMLComponent = {
  type: HTMLTag,
  content: string
}

export type ApiResponse<ResultsData> = {
  results: ResultsData
}

export type MySqlModelResponse<ApiData> = [
  ApiData[], Record<string, {
    catalog: string
    schema: string
    name: string
    orgName: string
    table: string
    orgTable: string
    characterSet: number
    encoding: string
    columnLength: number
    type: number
    flags: [],
    decimals: number
    typeName: string
  }>
]