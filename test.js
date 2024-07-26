test("One euro should be 156.5 yens", function() {
    const { fromEuroToYen } = require('./app.js');
    const yens = fromEuroToYen(3.5);
    const expected = 3.5 * 156.5;

    expect(fromEuroToYen(3.5)).toBe(547.75);
})

test("One euro should be 0.87 pounds", function() {
    const { fromEuroToPound } = require('./app.js');
    const pounds = fromEuroToPound(3.5);
    const expected = 3.5 * 0.87;

    expect(fromEuroToPound(3.5)).toBe(3.045);
})