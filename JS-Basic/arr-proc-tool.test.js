const Apt = require('./arr-proc-tool')
const apt = new Apt()
const arr = [-1, -3, -10, 8, 10, 11, 2, -9, 15]

describe('APT: getMaxSubSumO ', () => {
    test('should be defined', () => {
        expect(apt.getMaxSubSumO).toBeDefined()
        expect(apt.getMaxSubSumO).not.toBeUndefined()
    })
    test('should be max subsum', () => {
        const result = 37
        expect(apt.getMaxSubSumO(arr)).toEqual(result)
    })
})

describe('APT: getMaxSubSumO2 ', () => {
    test('should be defined', () => {
        expect(apt.getMaxSubSumO2).toBeDefined()
        expect(apt.getMaxSubSumO2).not.toBeUndefined()
    })
    test('should be max subsum with O2', () => {
        const result = 37
        expect(apt.getMaxSubSumO2(arr)).toEqual(result)
    })
})

describe('APT: selection', () => {
    const maxArr = [-10, 8, 10, 11]
    test('should be max subArr in array', () => {
        expect(apt.selection(arr)[1]).toEqual(maxArr)
    })
    test('should be increasing subArr in array', () => {
        expect(apt.selection(arr)[1][0]).toBeLessThan(maxArr[1])
    })
})

describe('APT: search', () => {
    const values = [
        min = -10,
        max = 15,
        med = 2
    ]

    test('should be min value in array', () => {
        expect(apt.search(arr)[0]).toEqual(values[0])
    })
    test('should be max value in array', () => {
        expect(apt.search(arr)[1]).toEqual(values[1])
    })
    test('should be median value in array', () => {
        expect(apt.search(arr)[2]).toEqual(values[2])
    })
})

