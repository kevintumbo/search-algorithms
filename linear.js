// Demonstration of linear search
// Loop through iterable data object until item matches element 

linearSearch = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === element){
            return `element ${element} exists on index ${i}`;
        }
    }
    return  `element ${element} does not exist`;
}

const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(linearSearch(rainbow, 'red'));
console.log(linearSearch(rainbow, 'green'));
console.log(linearSearch(rainbow, 'black'));
console.log(linearSearch(rainbow, 'white'));