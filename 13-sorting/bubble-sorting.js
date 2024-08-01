const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

const bubbleSort = (array, n) => {
    var i, j, swapped;
    for (i = 0; i < n -1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                swapped = true;
            }
        }
        if(swapped == false){
            break;
        }
    }
}

const printArray = array => {
    let i;
    for(i = 0; i < array.lenght; i++ )
        console.log(array[i]);
}

const unorderedArray = [10, 6, 3, 9, 2, 5, 4];
bubbleSort(unorderedArray);
printArray(unorderedArray);
