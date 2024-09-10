const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function verticalFlip(originalArr) {
    let newArr = [];
    originalArr.forEach((row, i) => {
        newArr.unshift(row);
    })
    return newArr;
}

function horizontalFlip(originalArr) {
    let newArr = [];
    originalArr.forEach((row, i) => {
        newArr.push(row.reverse());
    })
    return newArr;
}

function rotate90right(originalArr) {
    let newArr = [];
    for(let i = originalArr.length - 1; i >= 0; i--) {
        originalArr[i].forEach((cell, ii) => {
            if(i === originalArr.length - 1) {
                newArr.push([]);
            }
            newArr[ii].push(cell);
        })
    }
    return newArr;
}

function rotate90left(originalArr) {
    let newArr = [];
    for(let i = 0; i <= originalArr.length - 1; i++) {
        originalArr[i].forEach((cell, ii) => {
            if(newArr[originalArr.length - 1 - ii]) {
                newArr[originalArr.length - 1 - ii].push(cell);
            } else {
                newArr[originalArr.length - 1 - ii] = [cell];
            }
        })
    }
    return newArr;
}


console.log(verticalFlip(matrix));
console.log(horizontalFlip(matrix));
console.log(rotate90right(matrix));
let once = rotate90left(matrix);
let twice = rotate90left(once);
let thrice = rotate90left(twice);

console.log('🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈');
console.log('🙈 thrice:', thrice);
console.log(rotate90right(matrix));
console.log('🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈');