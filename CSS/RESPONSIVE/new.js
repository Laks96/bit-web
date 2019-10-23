function third(a) {
    if (a > 99 && a < 1000) {
        var number = a + " is three digit long";
    }
    return number;
    else {
        var numbersecond = a + " is not three digit long"
    }
    return numbersecond;
}
var result = third(900);
console.log(result)