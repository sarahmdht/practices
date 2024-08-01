// swap function
const swap = (array, x, y) =>{
let temp = array[x];
array[x] = array[y];
array[y] = temp;
}

// const unorderArray = ['A', 'B', 'C', 'D', 'E'];

// // invoke / call swap function
// swap(unorderArray, 0, 2);

// console.log(unorderArray);

const selectionSort = (array) => {
let min , i , j;
for(i = 0; i< (array.length - 1); i++){
min = i;
for(j = i +1; j<array.length; j++) {
    if(array[j] < array[min]){
        min = j;
    }
    swap(array, min, i);
}
}
}

const unorderedArray = [10, 6, 3, 9, 2, 5, 4];
selectionSort(unorderedArray);
console.log(unorderedArray);
