class DateHandler {
    //функция, принимающая регулярные выражения
    dateHandlerReg(data) {
        let string = "2020-12-31"
        let ok = data.exec(string)
        return ok
    }
    dateHandler(data) {
        let dd = data[0] + data[1]
        let mm = data[2] + data[3]
        let yyyy = data[4] + data[5] + data[6] + data[7]
        const fullData = `${dd}-${mm}-${yyyy}`
        return fullData
    }
    dateHandlerMonth(data) {
        let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let dd = data[0] + data[1]
        let mm = data[2] + data[3]
        let yyyy = data[4] + data[5] + data[6] + data[7]
        const fullData = `${dd} ${monthsArr[mm - 1]} ${yyyy}`
        return fullData
    }
    dateHandlerMonthFirst(data) {
        let dd = data[6] + data[7]
        let mm = data[4] + data[5]
        let yyyy = data[0] + data[1] + data[2] + data[3]
        const fullData = `${mm}-${dd}-${yyyy}`
        return fullData
    }
    dateHandlerFromNow(data){
        const moment = require('moment')
        let date = new Date(data)
        let years = moment().diff(date, 'years')
        return years
    }
}

module.exports = DateHandler