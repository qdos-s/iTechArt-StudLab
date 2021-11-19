class SortArray {
    //sort()
    arrSort(arr) {
        let sortedArr = arr.sort((a, b) => {
            return a - b
        })
        return sortedArr
    }
    //bubble sort
    bubbleSort(arr) {
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr
    }
    //selection sort
    selectionSort(arr) {
        let length = arr.length
        for (let i = 0; i < length - 1; i++) {
            let min = i
            for (let j = i + 1; j < length; j++) {
                if (arr[j] < arr[min]) min = j
            }
            let t = arr[min]
            arr[min] = arr[i]
            arr[i] = t
        }
        return arr
    }
    //insertion sort 
    insertionSort(arr) {
        let length = arr.length
        for (let i = 0; i < length; i++) {
            let v = arr[i],
                j = i - 1
            while (j >= 0 && arr[j] > v) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = v
        }
        return arr
    }
    //ShellSort
    shellSort(arr) {
        let n = arr.length, 
            i = Math.floor(n / 2);
        while (i > 0) {
            for (let j = 0; j < n; j++) {
                let k = j,
                    t = arr[j]
                while (k >= i && arr[k - i] > t) {
                    arr[k] = arr[k - i]
                    k -= i
                }
                arr[k] = t
            }
            i = (i == 2) ? 1 : Math.floor(i * 5 / 11)
        }
        return arr
    }
}

module.exports = SortArray