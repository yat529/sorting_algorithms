var arr = [];
        
// Random array generator
for(var i = 0; i < 10; i++) {
    arr.push(Math.round((Math.random() * 100)));
}


// Test selectionSort
var result = selectionSort(arr);
console.log(result);

// Selection Sort
function selectionSort(arr) {
    var min, temp, min_index, pass;

    pass = 1;

    for(var i = 0; i < arr.length; i++) {
        min = arr[i];

        for(var j = i + 1; j < arr.length; j++) {
            // find min
            if(min > arr[j]) {
                min = arr[j];
            }
        }

        // swap arr[i] with arr[min_index]
        min_index = arr.indexOf(min);
        temp = arr[i];
        arr[i] = min;
        arr[min_index] = temp;

        console.log(pass);
        pass++;
    }

    return arr;
}