import { EventGroupArtistAPI, EventGroupProgramAPI, EventLocationAPI } from "../../api"
import { parsedDateAndTime } from "../miscellaneous"

type CalendarInboundTransformedData = {
  dataType: 'calendar'
  results: {
    upcoming: InboundEventGroup[]
    past: InboundEventGroup[]
  }
}

type InboundEventGroup = {
  id: number
  artists: EventGroupArtistAPI[]
  program: EventGroupProgramAPI[]
  type: string
  venue: string
  presenter: string
  dateRange: {
    start: {
      month: string
      day: string
      year: string
    },
    end: {
      month: string
      day: string
      year: string
    }
  }
  eventDates: InboundEventListing[]
}

type InboundEventListing = {
  id: number,
  dateTime: parsedDateAndTime,
  link: string
  location: EventLocationAPI
  eventGroupingId: number
}

export {
  CalendarInboundTransformedData,
  InboundEventGroup,
  InboundEventListing,
}