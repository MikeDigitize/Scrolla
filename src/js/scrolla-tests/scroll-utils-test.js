import { getScrollAmount, scrolltoX, scrolltoY } from "../scrolla/scroll-utils";

export function scrollUtilsTests() {

    describe("Scroll utils tests", function() {

        describe("1. Get scroll amount function", function () {

            it("returns a negative number when the start is less than or equal to the stop value", function () {
                expect(getScrollAmount(100, 0, 10)).toBeGreaterThan(0);
            });

            it("returns a positive number when the start is greater than the stop value", function () {
                expect(getScrollAmount(0, 100, 10)).toBeLessThan(-1);
            });

        });

		describe("2. The window scrolls to an y position", function () {

			it("returns a negative number when the start is less than or equal to the stop value", function () {
				expect(getScrollAmount(100, 0, 10)).toBeGreaterThan(0);
			});

			it("returns a positive number when the start is greater than the stop value", function () {
				expect(getScrollAmount(0, 100, 10)).toBeLessThan(-1);
			});

		});

    });

}