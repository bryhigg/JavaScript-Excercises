/*
    return the only unique number from an array.
    All numbers in the input array are present twice, except for one.

    Example:
    In the array [ 1, 8, 4, 4, 6, 1, 8 ], all numbers are present twice except 6
    You should return 6
*/

function findUnique(input) {
    const counts = {}
    let a = 0
    for(const i of input){
        counts[i] = counts[i] ? counts[i] + 1 : 1;
    }
    for(const i in counts){
        if(counts[i]==1){
            a = parseInt(i)
            return a
        }
    }
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findUnique = findUnique