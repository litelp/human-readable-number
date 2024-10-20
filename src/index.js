module.exports = function toReadable (number) {

    const arrOfUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const arrOfDecade = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const numberLength = String(number).split('');

    if (number <= 19) {
        return arrOfUnits[number];
    }

    if (number >= 20 && number <= 99) {
        let decade = number % 10;
        return number % 10 === 0 ? (arrOfDecade[numberLength[0] - 2]) : (arrOfDecade[numberLength[0] - 2]) + ' ' + arrOfUnits[decade];
    }

    if (number >= 100 && number <= 999) {
        let hundreds = number % 100;
        if (number === 100) return 'one hundred';
        return number % 100 === 0 ? arrOfUnits[numberLength[0]] + ' hundred' : arrOfUnits[numberLength[0]] + ' hundred ' + toReadable(number % 100);
    }
}
