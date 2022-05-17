export interface IForecastApiResponse {
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

export interface IOption {
  label: string
  value: string
}

export interface IDayForecast {
  date: Date
  min: number
  max: number
  tempMorning: number
  tempDay: number
  tempNight: number
  humidity: number
}

export interface ISelectedDayForecast {
  date: Date
  hourly?: {
    temp: number
    humidity: number
  }[]
}

export interface IStatictics {
  min: number | null
  max: number | null
  mean: number | null
  mode: number | null
}
