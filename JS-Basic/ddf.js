class DateHandler {
    //функция, принимающая регулярные выражения
    dateHandlerReg(data) {
        let string = "2020-12-31"
        let ok = data.exec(string)
        console.log(ok)
    }
    dateHandler(data) {
        let dd = data[0] + data[1]
        let mm = data[2] + data[3]
        let yyyy = data[4] + data[5] + data[6] + data[7]
        const fullData = `${dd}-${mm}-${yyyy}`
        console.log(fullData)
    }
    dateHandlerMonth(data) {
        let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let dd = data[0] + data[1]
        let mm = data[2] + data[3]
        let yyyy = data[4] + data[5] + data[6] + data[7]
        const fullData = `${dd} ${monthsArr[mm - 1]} ${yyyy}`
        console.log(fullData)
    }
    dateHandlerMonthFirst(data) {
        let dd = data[6] + data[7]
        let mm = data[4] + data[5]
        let yyyy = data[0] + data[1] + data[2] + data[3]
        const fullData = `${mm}-${dd}-${yyyy}`
        console.log(fullData)
    }
    dateHandlerFromNow(data){
        const moment = require('moment')
        let date = new Date(data)
        let years = moment().diff(date, 'years')
        console.log(`${years} years ago`)
    }
}

let user = new DateHandler()
user.dateHandlerReg(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)
user.dateHandler("31102011")
user.dateHandlerMonth("31102011")
user.dateHandlerMonthFirst("20130431")
user.dateHandlerFromNow('2013-04-31')
