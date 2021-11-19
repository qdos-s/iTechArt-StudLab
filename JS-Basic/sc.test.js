const {parseCalculationString, StringCalc} = require('./sc')
const sc = new StringCalc()

describe('sc: calculate', () => {
    test('integer calculator',  () => {
        expect(sc.calculate(parseCalculationString('2+3*4/2+6'))).toEqual('14')
    })
    test('float calculator', () => {
        expect(sc.calculate(parseCalculationString('2.2+3.3*2/3'))).toEqual('4.4')
    })
})

