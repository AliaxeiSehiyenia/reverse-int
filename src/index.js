module.exports = function reverse (numb) {
    let reverseText = numb.toString().split('').reverse().join('');
    let reverseNumber = parseInt(reverseText, 10);
    /* parseInt() принимает строку в качестве аргумента и возвращает целое число
     в соответствии с указанным основанием системы счисления. */

    return reverseNumber;
  
}
