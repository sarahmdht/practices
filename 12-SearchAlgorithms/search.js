// const students = ["Adam", "Reham", "Mohamed", "Mona", "Ahmed"];

////// Linear search //////
/*
inputs: Array(list) , Value
output: position(index) of occurance(or) return -1 if not found
 */


let linearSearch = (list, value) => { //linear function is stored as object  
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            // console.log("Value found in index: " + i);
            return i;
        }
    }
    return -1; //when not found
}

const studentAges = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
//student1
let age = 2;
let foundIn = linearSearch(studentAges, age);
if (foundIn < 0) {
    console.log("Student not found")
}
else {
    console.log("student found in index= " + foundIn);
}
//student2
let student2age = 13;
let student2foundIn = linearSearch(studentAges, student2age)
if (student2foundIn < 0) {
    console.log("Student not found")
} else {
    console.log("student found in index= " + student2foundIn);
}


////// Binary Search /////
/*
Inputs: list, value
outputs: position of element or -1 if not found
*/

let binarySearch = (list, value) => {
    let left = 0;
    let right = list.length - 1;
    let mid = Math.floor((left + right)/ 2); //if list lenght is even it will pick the lower index

    while (left <= right && list[mid] !== value) {
        if (value < list[mid]) {
            right = mid - 1;  //set new right
        }
        if (value > list[mid]) {
            left = mid + 2;  //set new left
        }
        mid = Math.floor((left + right) / 2); //set new mid
    }

    if (list[mid] === value)
        return mid;
    else
        return -1;
}

const searchList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let item = 17;

console.log(binarySearch(searchList, item));