// palindrome
// given a string, is it a permutation palindrome
// no substring - same length
// don't care about spaces


function palindromePermutation(data) {
    // if any permutation can be a palindrome return true
    // all letters must be even or can also have a single one letter

    // remove spaces
    // const dataCopy = data.replace(' ', '');

    // dictionary to count occurances


    const myOdds = new Set();
    for (let i = 0; i < dataCopy.length; i++) {
        // ignore spaces
        if(dataCopy[i] !== ' '){
            if(myOdds) {

            }
            myOdds.add(dataCopy[i]);
            // on first/odd encounter, add to set -> odd
            // on subsequent/even, remove from set -> even
            // Set at the end should have 1 or None length
        }
    }


    // Object values make sure all even except 1 can be odd
    const myValues = Object.values(myCounts);
    let hasOdd = false;
    let valid = true;
    myValues.forEach(a => {
        if (a%2) {
            if (hasOdd) {
                valid = false;
            }
            hasOdd = true;
         Number.isE
        }
    })
    console.log(valid);
    return valid;
}

const a = 'tc at co a'; // could be 'taco cat', so 'true'
const b = 'bl aabl'; // could be 'abllba', so 'true'
const c = ' bo pbdp d'; // 'true'
const d = 'bp bdpd '; // 'true'
const e = 'b p dp d'; // 'true'
const f = 'g      u ge'; // 'false'
const g = 'hhhhhhhhhhhhh'; // 'true'

console.log('-------------------------');
palindromePermutation(a);
palindromePermutation(b);
palindromePermutation(c);
palindromePermutation(d);
palindromePermutation(e);
palindromePermutation(f);
console.log('-------------------------');


// odd number will have remainder:  === 1 === true
