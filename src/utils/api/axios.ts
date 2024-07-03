import axios from 'axios'

export const axiosMoralisInstance = axios.create({
  baseURL: 'https://deep-index.moralis.io/api/v2.2',
  headers: {
    accept: 'application/json',
    'X-API-Key': process.env.NEXT_PUBLIC_MORALIS_API,
  },
})
