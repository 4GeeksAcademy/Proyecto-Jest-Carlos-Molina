const fromEuroToYen = function(valueInEuro) {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

module.exports = { fromEuroToYen }

const fromEuroToPound = function(valueInEuro) {
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

module.exports = { fromEuroToYen, fromEuroToPound }