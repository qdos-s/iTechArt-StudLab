class SortArray {
    //sort()
    arrSort(arr) {
        let sortedArr = arr.sort((a, b) => {
            return a - b
        })
        console.log(sortedArr)
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
        console.log(arr)
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
        console.log(arr)
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
        console.log(arr)
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
        console.log(arr)
    }
}


let user = new SortArray()
user.arrSort([2, 3, 11, 7, -2, 5, 4])
user.bubbleSort([2, 3, 11, 7, -2, 5, 4])
user.selectionSort([2, 3, 11, 7, -2, 5, 4])
user.insertionSort([2, 3, 11, 7, -2, 5, 4])
user.shellSort([2, 3, 11, 7, -2, 5, 4])