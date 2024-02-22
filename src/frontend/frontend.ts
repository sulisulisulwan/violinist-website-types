import { ApiResponse, BiographyItemAPI, BlogItemAPI } from "../api"
import { CalendarDataAPI } from "../api/calendar"
import { MediaData } from "../api/media"

export type FEData = {
  bio: {
    longForm: BiographyItemAPI
    shortForm: BiographyItemAPI
  }
  calendar: ApiResponse<CalendarDataAPI>
  media: MediaData
  blog: ApiResponse<BlogItemAPI[]>
}