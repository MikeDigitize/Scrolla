import { getElementPosition, getElement, getPositionToWindow } from "../scrolla/get-utils";
import { getScrollAmount, scrolltoX, scrolltoY } from "../scrolla/scroll-utils";

import { createTestElement, insertElement, removeElement } from "./test-utils";

export function getPositionTests() {

    describe("Get element position tests", function() {

        var testElement1, testElement2, testElement3;

        describe("1. Un-nested element positions return correctly", function() {

            beforeEach(function() {
                testElement1  = createTestElement();
            });

            it("Element Y position is returned correctly", function() {
                insertElement(testElement1, "300px");
                expect(getElementPosition(testElement1).elY).toBe(300);
            });

            it("Element X position is returned correctly", function() {
                insertElement(testElement1, 0, "400px");
                expect(getElementPosition(testElement1).elX).toBe(400);
            });

            afterEach(function() {
                removeElement(testElement1);
            });

        });

        describe("2. Nested element positions return correctly", function () {

            beforeEach(function() {
                testElement1  = createTestElement("500px", "1500px");
                testElement2 = createTestElement();
            });

            it("Element Y position is returned correctly", function() {
                insertElement(testElement1, "300px");
                insertElement(testElement2, "500px", 0, testElement1);
                expect(getElementPosition(testElement1).elY).toBe(300);
                expect(getElementPosition(testElement2).elY).toBe(800);
            });

            it("Element X position is returned correctly", function() {
                insertElement(testElement1, 0, "300px");
                insertElement(testElement2, 0, "500px", testElement1);
                expect(getElementPosition(testElement1).elX).toBe(300);
                expect(getElementPosition(testElement2).elX).toBe(800);
            });

            afterEach(function() {
                removeElement(testElement1);
                removeElement(testElement2);
            });

        });

        describe("3. Deep nested element positions return correctly", function () {

            beforeEach(function() {
                testElement1  = createTestElement("1000px", "2500px");
                testElement2 = createTestElement("750px", "1500px");
                testElement3 = createTestElement();
            });

            it("Element Y position is returned correctly", function() {
                insertElement(testElement1, "100px");
                insertElement(testElement2, "800px", 0, testElement1);
                insertElement(testElement3, "800px", 0, testElement2);
                expect(getElementPosition(testElement1).elY).toBe(100);
                expect(getElementPosition(testElement2).elY).toBe(900);
                expect(getElementPosition(testElement3).elY).toBe(1700);
            });

            it("Element X position is returned correctly", function() {
                insertElement(testElement1, 0, "100px");
                insertElement(testElement2, 0, "300px", testElement1);
                insertElement(testElement3, 0, "400px", testElement2);
                expect(getElementPosition(testElement1).elX).toBe(100);
                expect(getElementPosition(testElement2).elX).toBe(400);
                expect(getElementPosition(testElement3).elX).toBe(800);
            });

            afterEach(function() {
                removeElement(testElement1);
                removeElement(testElement2);
                removeElement(testElement3);
            });

        });

    });

	describe("Get element tests", function() {

		describe("1. An element is always returned", function() {

			var testElement1;

			it("Returns an element from a selector", function() {
				testElement1  = createTestElement();
				testElement1.id = "testEl";
				insertElement(testElement1);
				expect(getElement("#testEl") instanceof HTMLElement).toBe(true);
			});

			it("Returns an element from an element", function() {
				testElement1  = createTestElement();
				insertElement(testElement1);
				expect(getElement(testElement1) instanceof HTMLElement).toBe(true);
			});

			afterEach(function() {
				removeElement(testElement1);
			});

		});

	});

}