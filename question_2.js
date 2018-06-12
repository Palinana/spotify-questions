/*Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is 
repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa" */
function decodeString(str) {
    let result = ''; 
    let tempStr = '';
    let length = str.length-1; 
    
    while (length >= 0) { 
        if (str[length] === ']' || str[length] === '[') { 
            length--;
        } 
        else {
            let times = Number(str[length]); 
            if (Number(times)) {
                result = tempStr + result;
                result = result.repeat(times); 
                tempStr = ''; 
            } 
            else {
                tempStr = str[length]+tempStr;
            }
            length--;
        }
    }
    return result;
}

