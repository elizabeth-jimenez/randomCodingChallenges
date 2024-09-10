// take an m*n matrix and if any element is 0, return the matrix with that row and column as 0
// more than 1 zero? yes

// 1 2 3 0 5 6 ---> 0 0 0 0 0 0
// 2 2 2 2 2   ---> 2 2 2 0 2

// 1 2 3 0 5 6 ---> 0 0 0 0 0 0
// 2 2 0 2 2   ---> 0 0 0 0 0






// 0 2 0 0 5 6 ---> 0 0 0 0 0 0
// 0 2 0 2 2   ---> 0 0 0 0 0


// 0 2 3 0 5 6 ---> 0 0 0 0 0 0
// 2 2 2 2 2   ---> 2 2 2 0 2

const rowZeroHasZero = true;
const colZeroHasZero = true;
// 2 2 2 0 2 2 ---> 0 0 0 0 0 0
// 2 2 2 2 2 2 ---> 0 2 2 0 2 2
// 0 2 2 2 2 2 ---> 0 0 0 0 0 0
// 2 2 2 0 2 2 ---> 0 0 0 0 0 0
// 2 2 2 2 2 2 ---> 0 2 2 0 2 2

// 2 2 2 2 2 2 ---> 2 2 2 2 0 2
// 2 2 2 2 2 2 ---> 2 2 2 2 2 2
// 2 2 2 2 2 2 ---> 2 2 2 2 2 2
// 2 2 2 2 0 2 ---> 0 2 2 2 2 2
// 2 2 2 2 2 2 ---> 2 2 2 2 2 2




// O(n) * O(m)

function zeroMatrix(matrix) {

    // loop through all elements
    // if 0, then that row and column will be zeroed out - take note somewhere somehow
    // return array based on collected zero coordinates

    // zeros = {rows: [0], cols:[3, 3, 3]}

    const zeros = {
        rows: [],
        cols: []
    };

    matrix.forEach((a, i) => {
        a.forEach((aa, ii) => {
            if(aa === 0) {
                zeros?.rows.push(i);
                zeros?.cols.push(ii);
            }
        })
    })

    let generatedMatrix = [];

    matrix.forEach((x, i) => {
        let c = [];
        x.forEach((xx, ii) => {
            if(zeros?.rows.includes(i) || zeros?.cols.includes(ii)) {
                c.push(0);
            } else {
                c.push(xx);
            }
        })
        generatedMatrix.push(c);
    })

    console.log('🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲');
    console.log('🪲 generatedMatrix: ', generatedMatrix);
    console.log('🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲');
    return generatedMatrix;
}


console.log(zeroMatrix([[1, 2, 3, 0, 5, 6], [2, 2, 0, 2, 2]]));