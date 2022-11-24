/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

function duplicateEncode(word) {
    arr = []
    output = ""
    word = word.toLowerCase()

    for(i = 0; i < word.length; i++){
        temp = word.split(word[i]).length - 1;
        x = temp
        arr.push(x)
    }
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 1){
            output += ")"
        }
        else{
            output += "("
        }
    }
    return output
}

duplicateEncode("recede")

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode