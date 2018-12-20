// Performs binary search on an array

const binarySearch = (sortedArray, element) => {
    let minIndex = 0;
    let maxIndex = sortedArray.length - 1;

    while (minIndex <= maxIndex) {
        let midIndex = Math.floor((minIndex + maxIndex) / 2);
        if (sortedArray[midIndex] === element) {
            return `${element} is found on ${midIndex}`;
        } else if (sortedArray[midIndex] < element) {
            minIndex = midIndex + 1;
        } else {
            maxIndex = midIndex - 1;
        }
    }
    return  `${element} is not found`; 
}

const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const sortedRainbow = rainbow.sort();

console.log(binarySearch(sortedRainbow, 'red'));
console.log(binarySearch(sortedRainbow, 'green'));
console.log(binarySearch(sortedRainbow, 'black'));
console.log(binarySearch(sortedRainbow, 'white'));
