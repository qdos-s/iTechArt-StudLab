class Tf {
    textFormatter(string, maxSize = 0, maxStrings = 2, formatType = 0, counter = 0) {
        counter++
        if (counter > maxStrings) return 'There is limit of strings'
        else if (formatType === 'Перенос по слову') {
            let short = string.substr(0, maxSize)
            let split = short.split(' ')
            for (let i = 0; i < split.length; i++) {
            }
            return split
        } else if (formatType === 'Перенос по символу') {
            let short = string.substr(0, maxSize)
            let split = short.split('')
            for (let i = 0; i < split.length; i++) {
            }
            return split
        } else if (formatType === 'Перенос по предложению') {
            let short = string.substr(0, maxSize)
            let split = short.split('.')
            for (let i = 0; i < split.length; i++) {
            }
            return split
        } else if (formatType === 'Переносов нет') {
            let short = string.substr(0, maxSize)
            return short
        }
        
        
    }
}

module.exports = Tf