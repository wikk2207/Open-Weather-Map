import { MILISECONDS_IN_SECOND } from './constants'

export const getDateFromDt = (dt: number): Date => new Date(dt * MILISECONDS_IN_SECOND)

export const getMean = (arr: number[]): number | null => {
  if (arr.length === 0) {
    return null
  }

  const sum = arr.reduce((acc, current) => acc + current, 0)

  return sum / arr.length
}

export const getMode = (arr: number[]): number | null => {
  const occurences = {} as { [number: number]: number }
  let bestOccurence = 0
  let mode = null

  arr.forEach(value => {
    if (!occurences[value]) {
      occurences[value] = 1

      return
    }

    occurences[value] += 1

    if (occurences[value] > bestOccurence) {
      bestOccurence = occurences[value]
      mode = value
    }
  })

  return mode
}
