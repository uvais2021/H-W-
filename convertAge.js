function convertAge() {
    let birthdate = new Date(document.getElementById('dob').value);
    let result = document.getElementById('age');
    let today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    result.value = `Your age is:${age}`

}