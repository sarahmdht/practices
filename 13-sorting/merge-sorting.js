/*
Function: Merge 
Desc: Merge two subarrays: L , R 
        First Subarray L is arr[l ... m]
        Second Subarray R is arr[m+1 ... r]
Inputs: array - Array
        l - Number -> left index
        m - Number -> Middle index
        r - Number -> Right index 
Output: array - Array -> Sorted Array
*/
const merge = (array, l, m, r) => {
    var n1 = m - l + 1; // Left array size 
    var n2 = r - m; // right array size

    // Create Temp Arrays
    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++) {
        L[i] = array[l + i];
    }
    for (var j = 0; j < n2; j++)
        R[j] = array[m + 1 + j];

    // Merge subarrays Temps 
    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++
        }
        k++;
    }

    // Copy remaining elements of L[]
    while (i < n1) {
        array[k] = L[i];
        i++;
        k++;
    }

    // Copy remaining elements of R[]
    while (j < n2) {
        array[k] = R[j];
        j++;
        k++;
    }

}


/*
    Function: mergeSort() 
    Desc: Invoke cutting array into two subarrays - OR - Stop if it's last element
    Inputs: array - Array -> Unsorted Array
            l - Number -> index of left start of array
            r - Number -> index of right end of array
    Output: array - Array -> Sorted Array
*/
const mergeSort = (array, l, r) => {
    if(l >= r )
        return;

    var m = l + parseInt((r - l)/2);
    mergeSort(array , l , m);
    mergeSort( array, m+1 , r);
    merge(array,l,m,r);      
}

const unorderedArray = [10,6,3,9,2,11,1,5,4];

mergeSort(unorderedArray, 0 , unorderedArray.length -1)

console.log(unorderedArray);