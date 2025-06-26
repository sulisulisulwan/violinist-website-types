
type threeLetterMonths = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
type parsedDateAndTime = {
  date: {
    year: string
    month: string
    day: string //TODO: DOUBLE CHECK THESE AREN'T SUPPOSED TO BE NUMBERS
  },
  time: {
    hour: string
    minute: string
    seconds: string
  }
}

type paddedMonthNumbers = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

type parsedAsNonMilitaryTime = { 
  hour: string
  minute: string
  amPm: string
}

type httpMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE'


interface eventListingDateTimeObjIF {
  date: {
    year: string,
    month: string,
    day: string
  },
  time: {
    hour: string
    minute: string
    amPm: string
  }
}

interface CMSEventGroupDateRange {
  start: {
    day: string
    month: string
    year: string
  }
  end: {
    day: string
    month: string
    year: string
  }
}

type formTypes = 'audio' | 'bio' | 'blog' | 'calendar' | 'photos' | 'playlists' | 'videos' | 'programs'

export {
  CMSEventGroupDateRange,
  eventListingDateTimeObjIF,
  formTypes,
  httpMethods,
  paddedMonthNumbers,
  parsedAsNonMilitaryTime,
  parsedDateAndTime,
  threeLetterMonths,
}
