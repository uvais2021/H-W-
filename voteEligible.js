function vote() {
    let age = document.getElementById("ageVote").value;
    let result = document.getElementById("resultForVote");

    if (age < 18) {
        result.value = `You are not eligible `
    }
    else if(isNaN(age)) {
        result.value = `Your input is invalid`
    } 
    else {
        result.value = `You are eligible `
    }
}
