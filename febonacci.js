function feb() {
    let num = parseInt(document.getElementById("febNum").value);
    let result = document.getElementById("resultForFeb");
    let febSequnce = [0, 1]
    for (let i = 2; i <= num; i++) {
        febSequnce[i] = febSequnce[i - 1] + febSequnce[i - 2];
    }

    result.value = `${febSequnce}`
    
}


