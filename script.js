function findDuplicates(array) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        // If the value is seen for the first time, mark it as seen
        if (!seen[value]) {
            seen[value] = true;
        } else {
            // If the value is already seen, it's a duplicate
            if (duplicates.indexOf(value) === -1) {
                duplicates.push(value);
            }
        }
    }

    return duplicates;
}





// const arr = [6, 9, 15, 6, 13, 9, 11, 15];
// console.log("Duplicate values:[6, 9, 15, 6, 13, 9, 11, 15];", findDuplicates(arr));



// function reverseArray(array) {
//     let start = 0;
//     let end = array.length - 1;

//     while (start < end) {
//         // Swap the elements at start and end indices
//         let temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;
        
//         // Move start index forward and end index backward
//         start++;
//         end--;
//     }

//     return array;
// }

// // Example usage
// const arr = [6, 9, 15, 6, 13, 9, 11, 15];
// console.log("Reversed array:", reverseArray(arr));

  