import axios from 'axios'

export const forecastApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
})

export const geocodingApi = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0'
})
