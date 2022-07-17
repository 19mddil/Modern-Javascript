describe("pow", function () {
    it("for a negative n result is NaN", function () {
        assert.isNaN(pow(2, -4));
    })
    it("for a fractional n result is NaN", function () {
        assert.isNaN(pow(2, 1.5));
    })
    describe("raises x to the power of 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} is raised to the power 3 is expected to have = ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            })
        }
        for (let i = 1; i <= 5; i++) {
            makeTest(i);
        }

    })
})