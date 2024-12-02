import { EventGroupArtistAPI, EventGroupProgramAPI } from "../../api"
import { eventListingDateTimeObjIF } from "../miscellaneous"
import * as React from 'react'

interface audioFormFieldStateIF {
  uploadPath: string
  author: string
  title: string
}

interface bioFormFieldStateIF {
  textEditorText: string
  titleText: string
}

interface blogFormFieldStateIF {
  titleText: string
  textEditorText: string
  dateCreated: string
  dateLastModified: string
}
interface calendarFormFieldStateIF {
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
  type: string,
  venue: string,
  presenter: string,
  artists: EventGroupArtistAPI[]
  program: EventGroupProgramAPI[]
  eventDates: eventListingFormStateIF[]
}

interface eventListingFormStateIF {
  id: number | null
  dateTime: eventListingDateTimeObjIF
  location: {
    country: string
    stateOrProvince: string
    city: string
    venue: string
  },
  link: string
  eventGroupingId: number | null
}

interface photosFormFieldStateIF {
  uploadPath: string
  photoCred: string
}
interface playlistFormFieldStateIF {
  name: string
  playlistTracks: { audioTrackId: number, id: number }[]
}

interface videosFormFieldStateIF {
  thumbnailUploadPath: {
    currPref: '' | 'saved' | 'defaultYT' | 'custom'
    defaultYT: string
    custom: string
    saved: string
  }
  youtubeCode: {
    isValid: boolean
    code: string
  }
  caption: string
}

type formFieldStates = 
  audioFormFieldStateIF | 
  bioFormFieldStateIF | 
  blogFormFieldStateIF |
  calendarFormFieldStateIF | 
  photosFormFieldStateIF | 
  playlistFormFieldStateIF |
  videosFormFieldStateIF 


type initialFormStates = 
  audioFormFieldStateIF |
  blogFormFieldStateIF |
  bioFormFieldStateIF | 
  calendarFormFieldStateIF |
  photosFormFieldStateIF |
  playlistFormFieldStateIF |
  videosFormFieldStateIF

interface initStateIF {
  currentTab: string
  deleteDocId: null | number
  displayDocId: null | number
  editFieldsEnabled: boolean
  editDocId: null | number
  fetchedData: any
  isDeletePhase: boolean
  modal: {
    isOpen: boolean
    type: string
  }
  currWorkflow: string
}
type setStateSSA = React.Dispatch<React.SetStateAction<initStateIF>>
    
interface tabListItemIF {
    metaName: string
    name: string
  }

export {
  audioFormFieldStateIF,
  bioFormFieldStateIF,
  blogFormFieldStateIF,
  calendarFormFieldStateIF,
  eventListingFormStateIF,
  formFieldStates,
  initialFormStates,
  initStateIF,
  photosFormFieldStateIF,
  playlistFormFieldStateIF,
  setStateSSA,
  tabListItemIF,
  videosFormFieldStateIF,
}