// task3-- problems using arrow functions



let numArr=[10,15,11,13,14,7,43,116,2];
//a==>print odd number in array using arrow function
let oddNum=(odd)=>{
    if(odd%2 != 0){
        return odd;
    }
}
console.log(numArr.filter(primeNum).join(" "));



//b==> Convert all the strings to title caps in a string array
let strArr=["learning","jaVaScriPt","is","AweSome"];
let titleCaps=(str)=>{
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    
}
console.log(strArr.map(titleCaps).join(" "));



//c==>sum of all numbers in array
let sumArr=(num1,num2)=>{
    return num1+num2;
};
console.log(numArr.reduce(sumArr));



//d==>print prime number in array using arrow function
let primeArray=(prime)=>{
    // console.log(odd);
    var count=0;
    // console.log(count);
     for(let i=1;i<=prime;i++){
        //  console.log(odd%i);
        if(prime%i==0){
            count+=1;
            //console.log(count);
        }
     }
    
     if(count<=2){
         
        return odd;
        
    }
        
    
};
console.log(numArr.map(oddArray).join(' '));



//e==>palindromes in the array
let palinArr=['madam',"cool",'racecar','thanks','mom'];
let checkPalindrome=(str)=>{
    if(str==str.split('').reverse().join("")){
        return str;
    }
};
console.log(palinArr.filter(checkPalindrome));