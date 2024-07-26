const { fromEuroToDollar , fromDollarToYen , fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(100);
    const expected = 100 * 1.07;

    expect(fromEuroToDollar(100)).toBe(107);
})

test("Dollars should return in yens", function() {
    const yens = fromDollarToYen(107);
    const expected = (107 / 1.07) * 156.5;

    expect(fromDollarToYen(107)).toBe(15650);
})

test("Yens should return in pounds", function() {
    const pounds = fromYenToPound(15650);
    const expected = (15650 / 156.5) * 0.87;

    expect(fromYenToPound(15650)).toBe(87);
})