/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(nums) {
    let i = 0
    let x = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000
    let y = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000
    let x_index = 0
    let count = 0

    while(true){
        if(count == 0){
            if(nums[i] < x){
                x = nums[i]
                x_index = i
            }
            else if(i == nums.length){
                nums.splice(x_index, 1)
                count += 1
                i = -1
            }
        }
        if(count > 0){
            if(nums[i] < y){
                y = nums[i]
            }
            else if(i == nums.length){
                break
            }
        }
        i += 1
    }
    return x + y
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers