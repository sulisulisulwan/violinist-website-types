export type MediaData = {
  photos: PhotoDataAPI[]
  videos: VideoDataAPI[]
  audio: AudioTrackDataAPI[]
  playlists: PlaylistItemAPI[]
}

export type PlaylistItemAPI = {
  id: number
  name: string
  playlistTracks: PlaylistTrackAPI[]
}

export type PlaylistItemMYSQL = {
  id: number
  name: string
}

export type PlaylistTrackMYSQL = { 
  id: number, 
  audioTrackId: number, 
  playlistId: number 
  position: number
}

export type PlaylistTrackAPI = { 
  id: number, 
  audioTrackId: number, 
  playlistId: number 
}

export type PhotoDataAPI = {
  id: number,
  src: string,
  croppedSrc: string,
  originalFileName: string,
  originalCroppedFileName: string,
  photoCred: string
}

export type PhotoDataMYSQL = {
  id: number,
  src: string,
  croppedSrc: string,
  originalFileName: string,
  originalCroppedFileName: string,
  photoCred: string
}

export type VideoDataAPI = {
  id: number
  youtubeCode: string
  thumbnail: string
  caption: string
}

export type VideoDataMYSQL = {
  id: number
  youtubeCode: string
  thumbnail: string
  caption: string
}

export type AudioTrackDataAPI = {
  id: number
  src: string
  author: string
  title: string
  originalFileName: string
}

export type AudioTrackDataMYSQL = {
  id: number
  src: string
  author: string
  title: string
  originalFileName: string
}