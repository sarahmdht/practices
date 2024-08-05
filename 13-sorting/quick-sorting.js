// Swap Function 
const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

const partition = (array, low, high) => {
    // Define pivot with the most right position
    let pivot = array[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        if(array[j] < pivot){
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
}

/*
Function: quickSort - takes array and implements quick sort
*/
const quickSort = (array, low, high) => {
    if(low < high){
        // pi partitioning index
        let pi = partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

const unorderedArray = [10, 6, 3, 9, 2, 5, 4];
quickSort(unorderedArray, 0, unorderedArray.length - 1);
console.log(unorderedArray);
