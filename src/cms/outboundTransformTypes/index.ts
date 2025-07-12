import { BiographyItemAPI, BlogItemAPI, EventGroupAPI } from "../../api"
import { PlaylistItemAPI } from "../../api/media"
import { initialFormStates } from "../states"


type OutboundTransformedAudio = FormData | { 
  id: number
  author: string
  title: string 
}
type OutboundTransformedCalendar = EventGroupAPI
type OutboundTransformedBio = BiographyItemAPI
type OutboundTransformedBlog = BlogItemAPI
type OutboundTransformedPhotos = FormData | { 
  id: number
}
type OutboundTransformerPlaylists = PlaylistItemAPI
type OutboundTransformedVideos = FormData | OutboundTransformedVideoNotFormData
type OutboundTransformedVideoNotFormData = {
  id: number
  youtubeCode: string
  thumbnailUploadPath: string
  caption: string
} 

type OutboundTransformedItem = 
  OutboundTransformedAudio |
  OutboundTransformedBio |
  OutboundTransformedBlog |
  OutboundTransformedCalendar | 
  OutboundTransformedPhotos | 
  OutboundTransformerPlaylists |
  OutboundTransformedVideos

type OutboundTransformer = (formFieldValues: initialFormStates, docId: number | string) => OutboundTransformedItem



export {
  OutboundTransformer,
  OutboundTransformedAudio,
  OutboundTransformedBio,
  OutboundTransformedBlog,
  OutboundTransformedCalendar,
  OutboundTransformedItem,
  OutboundTransformedPhotos,
  OutboundTransformerPlaylists,
  OutboundTransformedVideos,
  OutboundTransformedVideoNotFormData,
}