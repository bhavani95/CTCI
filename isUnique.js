/**
 * Expected
 * Determine if a string is unique or not
 * Conditions:
 * no other DS shouldn't be used
 */

//psuedocode
/**
 * have i as an iteration variable
 * keep j another iteration variable which will point to all other characters except the one in the ith location
 * if the char at ith location matches the character at jth location then return false
 * else true
 */

//code
const isUnique = ((string)=>{
for(let i =0; i<string.length;i++){
    for(let j =i+1; j<string.length;j++){
       if(string[i] === string[j]){
           return false;
       }
    }
}
return true;
});

console.log(`Answer is ${isUnique('abcb')}`);