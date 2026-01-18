/**
 * Given a string, s, where half of the letters are lowercase and half
 * uppercase, return whether the word formed by the lowercase letters is
 * the same as the reverse of the word formed by the uppercase letters.
 * (Assume that the length, n, is always even.)
 *
 * Example: s = "haDrRaHd"
 * Output: true. Both spell 'hard'.
 *
 * Example: s = "haHrARDd"
 * Output: false. The uppercase letters in reverse spell 'drah'.
 */

const { algorithm } = require("./algorithm");

const TEST_CASES = [
    {
        input: "haDrRAHd",
        output: true,
    },
    {
        input: "haHrARDd",
        output: false,
    },
];

TEST_CASES.forEach((kase) => {
    describe("when input is " + kase.input, () => {
        it("returns " + kase.output, () => {
            expect(algorithm(kase.input)).toBe(kase.output);
        });
    });
});
