/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    let str1 = ""
    let str2 = ""
    let count = 0
    let a = []
    
    for(i = 0; i < text.length; i++){
        a.push(text[i])
    }

    while(count < n){
        for(i = 0; i < a.length; i+2){
            str1 += a[i]
            if(i == a.length-1){
                break;
            }
        }
        for(i = 1; i < a.length; i+2){
            str2 += a[i]
            if(i == a.length-1){
                break;
            }
        }
    
        text = str2 + str1
    
        count = count + 1
    }

    return text
    
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    return -1
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt