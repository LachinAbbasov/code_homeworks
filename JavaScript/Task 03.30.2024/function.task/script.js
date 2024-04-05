// Function 1 - 

//  1 eded daxil olunur. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini return edən bir function yazin. (arrow function)


// let num =Number(prompt("Bir eded daxil et"))
// let countNumbers = num => {
//     if (num < 50) {
//         return parseInt(num / 3);
//     } else if (num <= 100) {
//         return parseInt(num / 5);
//     } else {
//         return parseInt(num / 8);
//     }
// }
// console.log(countNumbers(`${num}`));





// Function 2 - 
// 2 string qəbul edən bir function yazın və 2 string-dəki ortaq hərflərin sayını return etməlidir. Məsələn: alma və salam daxil olunarsa, a,l və m hərfləri, yəni 3 return etməlidir. Təkrarlanan hərflər bir dəfə sayılmalıdır. (anonym function)

// let countCommonLetter= function(str1,str2){
//     let commonChars="";
//     for(let i=0;i<str1.length; i++){
//         var char =str1[i];
//         if (str2.indexOf(char) !== -1 && commonChars.indexOf(char)===-1){
//             commonChars+=char;
//         }

//     }
//     return commonChars.length;
// };

// console.log(countCommonLetter("almaz","qalmaqal"));   Cavab =3

// TASKS:
// 1. Bir reqem daxil edirsiniz ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir, eger 12-den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir.

// var a = Number(window.prompt("Please Enter Number!"))


// var b = "";

// switch (a) {
//     case 1: b = "January";
//         break;
//     case 2: b = "February";
//         break;
//     case 3: b = "March";
//         break;
//     case 4: b = "April";
//         break;
//     case 5: b = "May";
//         break;
//     case 6: b = "June";
//         break;
//     case 7: b = "July";
//         break;
//     case 8: b = "August";
//         break;
//     case 9: b = "September";
//         break;
//     case 10: b = "October";
//         break;
//     case 11: b = "November";
//         break;
//     case 12: b = "December";
//         break;
//     default: alert("invalid input")
// }
// console.log(b)

// arrow function
// const getMonthName = (number) => {
//     if (number <= 0 || number > 12) {
//         return "invalid input";
//     }
//     const months = [
//         "January", "February", "March", "April", "May", "June", "July",
//         "August", "September", "October", "November", "December"
//     ];
//     return months[number - 1];
// };
// console.log(getMonthName(5)); 

// regular function
// function getMonthName(number) {
//     if (number <= 0 || number > 12) {
//         return "invalid input";
//     }
//     const months = [
//         "January", "February", "March", "April", "May", "June", "July",
//         "August", "September", "October", "November", "December"
//     ];
//     return months[number - 1];
// }
// console.log(getMonthName(5)); 

// anonym function  
// const getMonthName = function(number) {
//     if (number <= 0 || number > 12) {
//         return "invalid input";
//     }
//     const months = [
//         "January", "February", "March", "April", "May", "June", "July",
//         "August", "September", "October", "November", "December"
//     ];
//     return months[number - 1];
// };
// console.log(getMonthName(5));





// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.

// var a = prompt("Simvol");
// var b = parseInt(prompt("Rəqəm"));
// var c = ""
// for (var i = 0; i < b; i++) {
//     c += a;
// }
// console.log(c);

// arrow function  
// const symbol = prompt("Bir simvol daxil edin:");
// const number = parseInt(prompt("Bir rəqəm daxil edin:"));
// const printSymbolMultipleTimes = (symbol, number) => {
//     let result = '';
//     for (let i = 0; i < number; i++) {
//         result += symbol;
//     }
//     console.log(result);
// };

// printSymbolMultipleTimes(symbol, number);


// regular function 
// function printSymbolMultipleTimes(symbol, number) {
//     let result = '';
//     for (let i = 0; i < number; i++) {
//         result += symbol;
//     }
//     console.log(result);
// }


// const symbol = prompt("Bir simvol daxil edin:");
// const number = parseInt(prompt("Bir rəqəm daxil edin:"));


// printSymbolMultipleTimes(symbol, number);


// anonym function 

// const printSymbolMultipleTimes = function(symbol, number) {
//     let result = '';
//     for (let i = 0; i < number; i++) {
//         result += symbol;
//     }
//     console.log(result);
// };


// const symbol = prompt("Bir simvol daxil edin:");
// const number = parseInt(prompt("Bir rəqəm daxil edin:"));

// printSymbolMultipleTimes(symbol, number);



// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.
// let num=prompt("bir eded daxil et")
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum+=Number(num[i])
// }
// console.log(sum)

// arrow function  
// const sumOfDigits = (number) => {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = (number - number % 10) / 10;
//     }
//     return sum;
// };
// console.log(sumOfDigits(125));


// regular function 
// const sumOfDigits(number){
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = (number - number % 10) / 10;
//     }
//     return sum;
// };


// console.log(sumOfDigits(125));

// anonym function 
// const sumOfDigits =function(number){
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = (number - number % 10) / 10;
//     }
//     return sum;
// };


// console.log(sumOfDigits(125));
// 4. Bir alqoritm yazın, bir ədəd qəbul edir ve hemin ədədin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir. (perfect numbers - 6, 28, 496, 8128, and 33550336)

// var num = parseInt(prompt("Bir eded daxil et"));
// var sum = 0;
// for (var i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }
// if (sum === num) {
//     console.log( ` ${num} "This is Perfect Number." `);
// }
// else {
//     console.log(`${num} " This is not Perfect Number."`);
// }

// arrow function  
// const isPerfectNumber = (number) => {
//     if (number <= 1) {
//         return false;
//     }
//     let sum = 1; 
//     let divisor = 2;
//     while (divisor * divisor <= number) {
//         if (number % divisor === 0) {
//             sum += divisor;
//             if (divisor !== number / divisor) {
//                 sum += number / divisor;
//             }
//         }
//         divisor++;
//     }
//     return sum === number;
// };
// console.log(isPerfectNumber(6));


// regular function 
// const isPerfectNumber(number){
//     if (number <= 1) {
//         return false;
//     }
//     let sum = 1; 
//     let divisor = 2;
//     while (divisor * divisor <= number) {
//         if (number % divisor === 0) {
//             sum += divisor;
//             if (divisor !== number / divisor) {
//                 sum += number / divisor;
//             }
//         }
//         divisor++;
//     }
//     return sum === number;
// };
// console.log(isPerfectNumber(6));

// anonym function 
// const isPerfectNumber= function(number){
//     if (number <= 1) {
//         return false;
//     }
//     let sum = 1; 
//     let divisor = 2;
//     while (divisor * divisor <= number) {
//         if (number % divisor === 0) {
//             sum += divisor;
//             if (divisor !== number / divisor) {
//                 sum += number / divisor;
//             }
//         }
//         divisor++;
//     }
//     return sum === number;
// };
// console.log(isPerfectNumber(6));
// 5. Daxil olunan ədədin polindrome olub-olmamasını yoxlayan alqoritm yazın. Polindrome ədədlər soldan-sağa və sağdan-sola eyni olan ədədlərdir. Məsələn: 121, 4554, 12321 etc. Əgər polindrome-dursa true çap olunsun, əks halda isə false.
// let num = prompt("Bir eded daxil et");
// let Palindrome = true;
// let length = num.length;
// for (let i = 0; i < length / 2; i++) {
//     if (num[i] !== num[length - 1 - i]) {
//         Palindrome = false;
//         break;
//     }
// }

// if (Palindrome) {
//     console.log(`${num} "palindromdur."`);
// } else {
//     console.log(`${num} "  palindrome deyil."`);
    
// }



// arrow function  

// const isPalindrome = (number) => {
//     const str = String(number);
//     const len = str.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome(121));

// regular function 
// const isPalindrome(number){
//     const str = String(number);
//     const len = str.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome(121));


// anonym function 
// const isPalindrome = function(number){
//     const str = String(number);
//     const len = str.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome(121));
