class Apt {
    getMaxSubSumO(arr) {
        let maxSum = 0
        let partialSum = 0

        for (let item of arr) {
            partialSum += item;
            maxSum = Math.max(maxSum, partialSum)
            if (partialSum < 0) partialSum = 0
        }

        return maxSum
    }

    getMaxSubSumO2(arr) {
        let maxSum = 0;

        for (let i = 0; i < arr.length; i++) {
            let sumFixedStart = 0
            for (let j = i; j < arr.length; j++) {
                sumFixedStart += arr[j];
                maxSum = Math.max(maxSum, sumFixedStart)
            }
        }
        return maxSum

    }

    search(arr) {
        let min = arr[0]
        let max = min
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] > max) max = arr[i]
            if (arr[i] < min) min = arr[i]
        }

        let half = Math.floor(arr.length / 2)
        arr.sort(function (a, b) { return a - b })

        if (arr.length % 2) {
            return [min, max, arr[half]]
        } else return [min, max, (arr[half] + arr[half-1])/2]
    }

    selection(arr) {
        let maxArr = []
        let arrSelected = []
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] < arr[i + 1] || arr[i] > arr[i-1]) {
                arrSelected.push(arr[i])

            } else {
                maxArr = arrSelected
                arrSelected = []
            }
        }
        if (arrSelected.length > maxArr.length) {
            return [arr, arrSelected]
        } else return [arr, maxArr]
    }

}

module.exports = Apt