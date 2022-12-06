/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    arr = []
    arr1 = []
    
    for(i in sequence){
        arr.push(i)
    }

    arr1.from(arr)

    for(i = 0; i < arr.length; i++){
        if(i!= arr.length-1){
            if(arr1[i].toLowerCase() == arr1[i+1].toLowerCase()){
                if((arr[i].toLowerCase() || arr[i+1].toLowerCase()) && !(arr[i].toLowerCase() && arr[i+1].toLowerCase())){
    
                }
            }
        }

    }
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react