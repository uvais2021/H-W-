function fact() {
    let num = document.getElementById("num").value;
    let result = document.getElementById("result");
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        let fact =1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        result.value = `${fact}`
    }

}