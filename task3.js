// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let x = [5, 3, 8, 9, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]


function filterRangeInPlace(arr, a, b){
    
    for (let i = 0; i < arr.length; i++){

        let val = arr[i]

        if(val < a || val > b ){
            arr.splice(i,1)
            i--
        }
    }
}
console.log(x)
filterRangeInPlace(x, 1, 4)
console.log(x)