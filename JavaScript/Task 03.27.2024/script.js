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


// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.

// var a = prompt("Simvol");
// var b = parseInt(prompt("Rəqəm"));
// var c = ""
// for (var i = 0; i < b; i++) {
//     c += a;
// }
// console.log(c);



// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.
// let num=prompt("bir eded daxil et")
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum+=Number(num[i])
// }
// console.log(sum)


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



// 6. Listdəki sadə ədədlərin ədədi ortasını qaytaran bir alqoritm yazın. Məsələn: [3,7,9,4,24,25,8]; bu listdəki sadə ədədlərin ədədi ortasını hesablayıb qaytarılmalıdır.




// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.