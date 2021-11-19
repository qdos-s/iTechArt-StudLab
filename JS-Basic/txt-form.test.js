const Tf = require('./txt-form')
const tf = new Tf()

describe('tf: textFormatter', () => {
    test('check max string size', () => {
        expect(tf.textFormatter('JavaScript', 3, 1, "Переносов нет")).toEqual('Jav')
    })
    test('check max strings', () => {
        let maxStrings = 3
        expect(tf.textFormatter('  ', 2, maxStrings, 'Переносов нет', 4)).toEqual('There is limit of strings')
    })
    test('Перенос по слову', () => {
        const arr = [
            "JavaScript",
            "HTML",
            "CSS"
        ]
        expect(tf.textFormatter('JavaScript HTML CSS', 20, 5, 'Перенос по слову')).toEqual(arr)
    })
    test('Перенос по символу', () => {
        const arr = [
            "J","a","v","a","S","c","r","i","p","t"
        ]
        expect(tf.textFormatter('JavaScript', 20, 5, 'Перенос по символу')).toEqual(arr)
    })
    test('Перенос по предложению', () => {
        const arr = [
            "JavaScript",
            "HTML",
            "CSS"
        ]
        expect(tf.textFormatter('JavaScript.HTML.CSS', 20, 5, 'Перенос по предложению')).toEqual(arr)
    })
    test('Переносов нет', () => {
        const arr = [
            "JavaScript HTML CSS"
        ]
        expect(tf.textFormatter('JavaScript HTML CSS', 20, 5, 'Переносов нет')).toEqual(...arr)
    })
})