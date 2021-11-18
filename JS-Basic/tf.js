let counter = 0

function textFormatter(string, maxSize = 0, maxStrings = 2, formatType = 0) {
    counter++
    if (counter > maxStrings) return console.log('There is limit of strings')
    else if (formatType === 'Перенос по слову'){
        let short = string.substr(0, maxSize)
        let split = short.split(' ')
        for (let i = 0; i < split.length; i++) {
            console.log(split[i])
        }       
    } else if (formatType === 'Перенос по символу') {
        let short = string.substr(0, maxSize) 
        let split = short.split('')
        for (let i = 0; i < split.length; i++) {
            console.log(split[i])
        }
    } else if (formatType === 'Перенос по предложению') {
        let short = string.substr(0, maxSize) 
        let split = short.split('.')
        for (let i = 0; i < split.length; i++) {
            console.log(split[i])
        }
    } else if (formatType === 'Переносов нет') {
        let short = string.substr(0, maxSize)
        console.log(short)
    }
    console.log(counter)
}

textFormatter(
    'JavaScript HTML CSS.Nodejs PHP Python',
    35,
    2,
    'Перенос по предложению'
)
textFormatter(
    'TypeScript',
    35,
    2,
    'Перенос по предложению'
)
textFormatter(
    'HTML'
)
textFormatter(
    'CSS'
    
)