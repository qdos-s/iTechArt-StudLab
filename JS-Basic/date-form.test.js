const Ddf = require('./date-form')
const ddf = new Ddf()


describe('Ddf: dateHandlerReg', () => {
    const reg = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    test('should format date using regExp', () => {
        expect(ddf.dateHandlerReg(reg)[0]).toBe('2020-12-31')
    })
})

describe('Ddf: dateHandler', () => {
    test('format from DDMMYYYY to DD-MM-YYYY', () => {
        expect(ddf.dateHandler('31102011')).toEqual('31-10-2011')
    })
})

describe('Ddf: dateHandlerMonth', () => {
    test('format from DDMMYYYY to DD Month YYYY', () => {
        expect(ddf.dateHandlerMonth('31102011')).toEqual('31 October 2011')
    })
})

describe('Ddf: dateHandelrMonthFirst', () => {
    test('format from YYYYMMDD to MM-DD-YYYY', () => {
        expect(ddf.dateHandlerMonthFirst('20130431')).toEqual('04-31-2013')
    })
})

describe('Ddf: dateHandlerFromNow', () => {
    test('years from now', () => {
        expect(ddf.dateHandlerFromNow('2013-04-31')).toEqual(8)
    })
})