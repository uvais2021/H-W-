
function Find() {
    let num = document.getElementById('num1').value;
    let result = document.getElementById('result1')
    if (num > 0) {
        result.value = ("" + num + " is a Positive number");
    }
    else if (num == 0) {
        result.value = ("" + num + " is a Equal number");
    }
    else {
        result.value = ("" + num + " is a Negative number");
    }
}

