import axios from 'axios'
import qs from 'qs'

export const api = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  headers: {
    'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.statusText ||
      'Произошла ошибка при загрузке данных'
    return Promise.reject(new Error(message))
  },
)
