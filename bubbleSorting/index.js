var arr = [];
        
// Random array generator
for(var i = 0; i < 10; i++) {
    arr.push(Math.round((Math.random() * 100)));
}



// Test bubbleSort
var result = bubbleSort(arr);
console.log(result);

function bubbleSort(arr) {
    var min, min_index, temp, limit, pass;

    limit = arr.length;
    pass = 1;

    // Main Loop, move the limit from right to left for each pass
    for(var i = limit; i > 1; i--) {

        // Sub Loop, for compare and swap, from arr[0] to arr[limit-1]
        for(var j = 0; j < i; j++) {
            // compare
            if(arr[j] > arr[j+1]) {
                // swap
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

        console.log(pass);
        pass++;
    }

    // return array
    return arr;
}