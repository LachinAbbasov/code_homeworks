// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method-lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]

// function getFirst(arr, n = 1) {
//     return arr.slice(0, n);
// }

// console.log(getFirst([1, 73, 99, 20])); // Output: 1
// console.log(getFirst([1, 73, 99, 20], 2)); // Output: [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)); // Output: []
// console.log(getFirst([1, 73, 99, 20], 4)); // Output: [1, 73, 99, 20]


// 2. Write a simple JavaScript function to join all elements of the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// function join(arr, calc) {
//     return arr.join(calc) ;

// }

// console.log(join([1, 73, 99, 20], "*")) ; 
// console.log(join([1, 73, 99, 20], "/"))  ;

// 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example: 
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// function convert(str) {
//     return str.split('').map(char => {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase();
//         } else {
//             return char.toUpperCase();
//         }
//     }).join('');
// }

// console.log(convert('saLamNecesen'));



// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

// function clear(arr) {
//     return arr.filter(item => item);
// }

// console.log(clear([0, 1, false, 2, undefined, '', 3, null]));

// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]
// function clearDuplicate(arr) {
//     let uniqueArray = [];
//     let seen = new Set();
    
//     for (let item of arr) {
//         if (!seen.has(item)) {
//             uniqueArray.push(item);
//             seen.add(item);
//         }
//     }
    
//     return uniqueArray;
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]));
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));


// 6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]))

// 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.

// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// 10. Students object-lerinden ibaret bir array-iniz  olsun. student object-inde (name,surname,age,point) deyerleri var.
// Hemin array-i telebelerin yashina gore azalan sira ile sort edin.
// Hemin array-i telebelerin point deyerine esasen sort edin.
// Hemin array-i parametr olaraq qebul eden  bir funtion yazin. Point-i en ashagi olan ve en yuxari olan teleblerin name-lerini bir array-e yigib return edin. (Math class-indan istifade edin)