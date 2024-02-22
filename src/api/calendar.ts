
export type CalendarDataAPI = {
  past: EventGroupAPI[]
  upcoming: EventGroupAPI[]
}

export type DateRangeAPI = {
  start: string // ex. "2024-05-05T00:00:00.000Z"
  end: string // ex. "2024-05-05T00:00:00.000Z"
}

export type EventGroupAPI = {
  id: number
  dateRange: DateRangeAPI
  type: string
  venue: string
  presenter: string
  artists: EventGroupArtistAPI[]
  program: EventGroupProgramAPI[]
  eventDates: EventListingAPI[]
}

export type EventGroupMYSQL = {
  id: number
  dateStart: string
  dateEnd: string
  type: string
  venue: string
  presenter: string
  artists: string
  program: string
  eventDates: string
}

export type EventGroupProgramAPI = {
  composer: string
  arranger: string
  work: string
}

export type EventGroupArtistAPI = {
  name: string
  medium: string
}

export type EventListingAPI = {
  id: number
  dateTime: string
  location: EventLocationAPI
  eventGroupingId: number
  link: string
}

export type EventListingMYSQL = {
  id: number
  dateTime: string
  location: string
  eventGroupingId: number
  link: string
}

export type EventLocationAPI = {
  country: string
  stateOrProvince: string
  city: string
  venue: string
}
