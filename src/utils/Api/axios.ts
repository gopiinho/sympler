import axios from 'axios'

const axiosAlchemyInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ALCHEMY_BASE_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosAlchemyInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
)

export default axiosAlchemyInstance
