class BinaryConvert {
    toBIN(num) {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += num[i] * 10 ** i
        }

        let arr = []

        for (sum; Math.floor(sum / 2) >= 0; Math.floor(sum / 2)) {
            if (Math.floor(sum / 2) == 0) {
                arr.push(sum % 2)
                break
            } else {
                arr.push(sum % 2)
                sum = Math.floor(sum / 2)
            }
            
        }

        return arr

    }

    toDEC(bin) {
        let sum = 0
        for (let i = 0; i < bin.length; i++) {
            sum += bin[i] * 2 ** i
        }
        let newArr = sum.toString().split('')
        let numb = newArr.map(Number)

        return numb.reverse()
    }
    //from DEC to OCTAL
    toOCTAL(dec) {
        let sum = 0
        for (let i = 0; i < dec.length; i++) {
            sum += dec[i] * 10 ** i
        }
        let arr = []

        for (sum; Math.floor(sum / 8) >= 0; Math.floor(sum / 8)) {
            if (Math.floor(sum / 8) == 0) {
                arr.push(sum % 8)
                break
            } else {
                arr.push(sum % 8)
                sum = Math.floor(sum / 8)
            }
        }
        return arr
    }
}

module.exports = BinaryConvert