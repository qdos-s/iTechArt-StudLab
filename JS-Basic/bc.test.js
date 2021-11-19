const BinaryConvert = require('./bc.js')
let binConv = new BinaryConvert()

describe('BinaryConvert: toBIN()', () => {
    test('should convert from DEC to BIN', () => {
        expect(binConv.toBIN([1, 2, 3])).toEqual([1, 0, 0, 0, 0, 0, 1, 0, 1])
        expect(binConv.toBIN([2, 4, 5])).toEqual([0, 1, 1, 1, 1, 0, 0, 0, 0, 1])
    })

})

describe('BinaryConvert: toDEC()', () => {
    test('should convert from BIN to DEC', () => {
        expect(binConv.toDEC([1, 0, 0, 0, 0, 0, 1, 0, 1])).toEqual([1, 2, 3])
        expect(binConv.toDEC([0, 1, 1, 1, 1, 0, 0, 0, 0, 1])).toEqual([2, 4, 5])
    })
})

describe('BinaryConvert: toOCTAL()', () => {
    test('should convert from DEC to OCTAL', () => {
        expect(binConv.toOCTAL([1, 2, 3])).toEqual([1, 0, 5])
        expect(binConv.toOCTAL([2, 4, 5])).toEqual([6, 3, 0, 1])
    })
})