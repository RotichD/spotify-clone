import { atom } from 'recoil';
import SpotifyApi from 'spotify-web-api-node'

export const playlistIdState = atom({
    key: 'playlistIdState',
    default: '1kNluw9lojM3XPxulTpjHE'
})

export const playlistState = atom<SpotifyApi.SinglePlaylistResponse | null>({
    key: 'playlistAtomState',
    default: null
})