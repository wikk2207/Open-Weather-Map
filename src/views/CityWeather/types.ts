export interface ForecastApiResponse {
  hourly: {
    dt: number
    temp: number
    humidity: number
  }[]
  daily: {
    dt: number
    temp: {
      morn: number
      day: number
      eve: number
      night: number
      min: number
      max: number
    }
    humidity: number
  }[]
}

export interface Option {
  label: string
  value: string
}

export interface DayForecast {
  date: Date
  min: number
  max: number
  tempMorning: number
  tempDay: number
  tempNight: number
  humidity: number
  hourlyForecast: {
    temp: number
    humidity: number
  }[]
}
