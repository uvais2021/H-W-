
function convert() {
let temp = parseFloat(document.getElementById('temp').value);
let opt = document.getElementById('TempConvert').value;
let Result = document.getElementById('Result')

    switch (opt) {
        case 'K':
            Result.value = (temp + 459.67) * 5 / 9
            break;

        case 'F':
            Result.value = (temp * 1.8) + 32
            break;

        case 'C':
            Result.value = (temp - 32) / 1.8
            break;

        default:
            document.write('Enter the given option or Type Something')
    }

}
