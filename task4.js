// Sort in decreasing order
// importance: 4
let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10


console.log(arr)

arr.sort((a,b) => {
    return a - b
})

console.log(arr)