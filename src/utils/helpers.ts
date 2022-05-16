import { MILISECONDS_IN_SECOND } from './constants'

export const getDateFromDt = (dt: number): Date => new Date(dt * MILISECONDS_IN_SECOND)
