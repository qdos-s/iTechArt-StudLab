const SortArray = require('./arr-sort')
const as = new SortArray()
const arr = [2, 3, 11, 7, -2, 5, 4]
const sortedArr = [-2, 2, 3, 4, 5, 7, 11]

describe('as: arrSort', () => {
    test('sort array with sort()', () => {
        expect(as.arrSort(arr)).toEqual(sortedArr)
    })
})

describe('as: bubbleSort', () => {
    test('sort array with bubbleSort()', () => {
        expect(as.bubbleSort(arr)).toEqual(sortedArr)
    })
})

describe('as: selectionSort', () => {
    test('sort array with selectionSort()', () => {
        expect(as.selectionSort(arr)).toEqual(sortedArr)
    })
})

describe('as: insertionSort', () => {
    test('sort array with insertionSort()', () => {
        expect(as.insertionSort(arr)).toEqual(sortedArr)
    })
})

describe('as: ShellSort', () => {
    test('sort array with shellSort()', () => {
        expect(as.shellSort(arr)).toEqual(sortedArr)
    })
})