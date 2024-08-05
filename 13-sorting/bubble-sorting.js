// moving in bubble to list the largest amount at the end and so on
// Swap Function 
const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array;
    array[y] = temp;
}

const bubbleSort = array  => {

    var i, j, swapped;
    
    for (i = 0; i < array.length -1; i++) {
        
        swapped = false;
        
        for (j = 0; j < array.length - i -1 ; j++) {

            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                swapped = true;
            }

        }

        if (swapped == false)
            break;
    }
}

const unorderedArray = [10,6,3,9,2,5,4];
bubbleSort(unorderedArray);
console.log(unorderedArray)