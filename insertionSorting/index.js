var arr = [];
        
// Random array generator
for(var i = 0; i < 10; i++) {
    arr.push(Math.round((Math.random() * 100)));
}


// Test selectionSort
var result = insertionSort(arr);
console.log(result);

// Insertion Sort
function insertionSort(arr) {
    var count = 0;

    // main loop
    for(var i = 1; i < arr.length; i++) {
        // start from the second number in the array
        // use sub loop to compare the arr[i] with each number starting from arr[0] to arr[i-1]
        // if found a number larger than arr[i], then insert arr[i] before that number
        // repeat the process with the main loop

        // NOTE: the numbers on the left hand side of arr[i] is always sorted

        // sub loop to compare and insert
        for(var j = 0; j < i; j++) {
            // compare with previous, if true then insert
            if(arr[i] < arr[j]) {
                arr = insert(i, j, arr);
            }
        }

        count++;
    }

    console.log(count);
    return arr;
}


// helper function
// Note: assumes curr_index is always greater than target_index
function insert(curr_index, target_index, arr) {
    var temp = arr[curr_index];

    for(var i = curr_index; i > target_index; i--) {
        arr[i] = arr[i-1];
    }

    arr[target_index] = temp;
    return arr;  
}