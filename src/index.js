module.exports = function reverse (n) {
    n = n + '';
    let reverseText = n.split('').reverse().join('');
    let reverseNumber = parseInt(reverseText, 10);

    return reverseNumber;
  
}
