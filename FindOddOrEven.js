
function Find1() {
    let num = document.getElementById('num2').value;
    let result = document.getElementById('result2')
    if (num % 2 == 0) {
        result.value = ("" + num + " is a Even number");
    }
    else if (num % 2 !== 0) {
        result.value = ("" + num + " is a Odd number");
    }
    else {
        result.value = ("" + num + " is a NaN ");
    }
}