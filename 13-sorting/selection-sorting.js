// sort array by defining a min and 2 points to compare values and swap them

// Swap Function 
const swap = (array, x, y) => {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

const selectionSort = array => {

    let min, i, j;

    for (i = 0; i < array.length -1; i++) {

        min = i;
        for( j = i +1; j < array.length ; j++ ){
            if(array[j] < array[min])
                {
                    min = j ;
                }
            swap(array, min , i);
        }

    }
}

// const printArray = array => {
//     let i;
//     for(i = 0 ; i < array.length ; i++)
//         console.log(array[i]);
// }
const unorderedArray = [10,6,3,9,2,5,4];
selectionSort(unorderedArray);


console.log(unorderedArray);