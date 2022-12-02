import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MUSIXMATCH_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  },
  params: {
    'apikey': process.env.NEXT_PUBLIC_MUSIXMATCH_APIKEY,
  }
})

export default request;