/*
Function: Insertion sorting for Array
Inputs(params):Array - Unordered list to be arranged
Output: Array - sorted array
*/

const insertionSort = (array) => {
    //declare variables
    let key;

    for(let i = 1; i < array.length; i++){
        key = array[i];
        j = i - 1;

        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j--;
        }
    array[j + 1] = key;
    }
}

const unorderedArray = [10,6,3,9,2,5,4];
insertionSort(unorderedArray);
console.log(unorderedArray);