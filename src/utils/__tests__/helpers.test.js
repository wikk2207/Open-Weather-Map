import { getMean, getMode } from 'utils/helpers'

describe('Helpers tests', () => {
  const numbers = [11, 3, 5, 2, 6, 5, 10, 9]

  describe('getMean tests', () => {
    it('should return a mean of given array of numbers', () => {
      const result = getMean(numbers)

      expect(result).toBe(6.375)
    })

    it('should return a null for empty array', () => {
      const result = getMean([])

      expect(result).toBe(null)
    })
  })

  describe('getMode tests', () => {
    it('should return a mode of given array of numbers', () => {
      const result = getMode(numbers)

      expect(result).toBe(5)
    })

    it('should return a null for empty array', () => {
      const result = getMode([])

      expect(result).toBe(null)
    })
  })
})
