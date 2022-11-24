/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
    arr = []
    arr1 = []
    reverseMe.toLowerCase()
    vowels = ["a", "e", "i", "o", "u"]

    for(i = 0; i<reverseMe.length; i++){
        for(j = 0; j<vowels.length; j++){
            if(reverseMe[i] == vowels[j]){
                arr.push(reverseMe[i])
                arr1.push(i)
            }
        }
    }
    
    arr = arr.reverse()
    console.log(arr)
    console.log(arr1)
    count = 0
    for(i = 0; i < reverseMe.length; i++){
        for(j = 0; j<vowels.length; j++){
            if(reverseMe[i] == vowels[j]){
                reverseMe.replace(reverseMe[i], arr[i-count])
            }
            count +=1
        }
    }

    return reverseMe

}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels