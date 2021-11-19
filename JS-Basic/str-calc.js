function parseCalculationString(s) {
    let calculation = [],
        current = '';
    for (let i = 0, ch; ch = s.charAt(i); i++) {
        if ('*/+-'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i)
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}


class StringCalc {
    calculate(calc) {
        let ops = [
        { '*': (a, b) => a * b, '/': (a, b) => a / b },
        { '+': (a, b) => a + b, '-': (a, b) => a - b }
        ],
            newCalc = [],
            currentOp,
            Result;
        for (let i = 0; i < ops.length; i++) {
            for (let j = 0; j < calc.length; j++) {
                if (ops[i][calc[j]]) {
                    currentOp = ops[i][calc[j]];
                } else if (currentOp) {
                    newCalc[newCalc.length - 1] =
                        currentOp(newCalc[newCalc.length - 1], calc[j]);
                    currentOp = null;
                } else {
                    newCalc.push(calc[j]);
                }

            }
            calc = newCalc;
            newCalc = [];
        }
        return ""+calc
    }
}

module.exports = {parseCalculationString, StringCalc}
