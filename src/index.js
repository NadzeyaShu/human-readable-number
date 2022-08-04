module.exports = function toReadable(number) {
    let result;

    if (number <= 99) {
        result = getNumbersFrom0To99(number);
    } else {
        let arr = toNumbersArray(number);
        result = getThreeDigitNumbers(arr[0]);
        if (arr[1] !== 0 || arr[2] !== 0) {
            let digit = number % 100;
            result = result
                + ' '
                + getNumbersFrom0To99(digit);
        }
    }

    return result;
}

function getNumbersFrom0To99(number) {
    let result;

    if (number < 10) {
        result = getBasicNumber(number);
    } else {
        result = getNumbersFrom10To99(number);
    }
    return result;
}

function getNumbersFrom10To99(number) {
    let result;
    if (number < 20) {
        result = getTenthsNumbers(number);
    } else {
        let arr = toNumbersArray(number);
        result = getTwoDigitNumbers(arr[0]);
        if (arr[1] !== 0) {
            result = result
                + ' '
                + getBasicNumber(arr[1]);
        }
    }
    return result;
}

function toNumbersArray(number) {
    return number.toString()
        .split('')
        .map(element => Number(element));
}

function getThreeDigitNumbers(number) {
    switch (number) {
        case 1:
            return 'one hundred';
        case 2:
            return 'two hundred';
        case 3:
            return 'three hundred';
        case 4:
            return 'four hundred';
        case 5:
            return 'five hundred';
        case 6:
            return 'six hundred';
        case 7:
            return 'seven hundred';
        case 8:
            return 'eight hundred';
        case 9:
            return 'nine hundred';
    }
}

function getTwoDigitNumbers(number) {
    switch (number) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function getTenthsNumbers(number) {
    switch (number) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function getBasicNumber(number) {
    switch (number) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}
