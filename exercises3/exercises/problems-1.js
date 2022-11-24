/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {

    let i = 0
    let j = 0
    let count1 = 0
    let count2 = 0


    while(i <= nums.length-1){
        if(nums[i] < nums[i + 1]){
            count1 = count1 + 1
        }
        else if(nums[i] > nums[i + 1]){
            count2 = count2 + 1
        }
        if(count1 == nums.length-1){
            return "yes, ascending"
        }
        else if(count2 == nums.length-1){
            return "yes, descending"
        }
        if(i == nums.length-1){
            return "no"
        }
        
        i = i + 1
    }
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow