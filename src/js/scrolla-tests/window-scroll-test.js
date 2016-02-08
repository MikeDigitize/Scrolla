import { windowScroll } from "../scrolla/window-scroll";
import { getWindowPosition } from "../scrolla/get-utils";
import { getScrollAmount, scrolltoX, scrolltoY } from "../scrolla/scroll-utils";

export function windowScrollTests() {

		describe("Window scroll tests", function() {

			describe("1. Vertical scroll downward test", function () {

				beforeEach(function(done) {

					document.body.style.height = "5000px";
					window.scrollTo(0, 0);

					windowScroll.call({}, 0, 1000, getScrollAmount(0, 1000, 10), function(scrollHere) {
						scrolltoY(scrollHere);
					}).then(function() {
						done();
					});

				});

				it("The window scrolls down to the correct y position", function (done) {
					expect(getWindowPosition().winY).toBe(1000);
					done();
				});

				afterEach(function(){
					document.body.style.height = "auto";
					window.scrollTo(0, 0);
				});
			});

			describe("2. Horizontal scroll right tests", function () {

				beforeEach(function(done) {

					document.body.style.width = "5000px";
					window.scrollTo(0, 0);

					windowScroll.call({}, 0, 1250, getScrollAmount(0, 1250, 10), function(scrollHere) {
						scrolltoX(scrollHere)
					}).then(function() {
						done();
					});

				});

				it("The window scrolls right to the correct x position", function (done) {
					expect(getWindowPosition().winX).toBe(1250);
					done();
				});

				afterEach(function(){
					document.body.style.width = "auto";
					window.scrollTo(0,0);
				});
			});

			describe("3. Vertical scroll upward test", function () {

				beforeEach(function(done) {

					document.body.style.height = "5000px";
					window.scrollTo(0, 2500);

					windowScroll.call({}, 2500, 1000, getScrollAmount(2500, 1000, 10), function(scrollHere) {
						scrolltoY(scrollHere);
					}).then(function() {
						done();
					});

				});

				it("The window scrolls up to the correct y position", function (done) {
					expect(getWindowPosition().winY).toBe(1000);
					done();
				});

				afterEach(function(){
					document.body.style.height = "auto";
					window.scrollTo(0,0);
				});

			});

			describe("4. Horizontal scroll left tests", function () {

				beforeEach(function(done) {

					document.body.style.width = "5000px";
					window.scrollTo(2500, 0);

					windowScroll.call({}, 2500, 1250, getScrollAmount(2500, 1250, 10), function(scrollHere) {
						scrolltoX(scrollHere);
					}).then(function() {
						done();
					});

				});

				it("The window scrolls left to the correct x position", function (done) {
					expect(getWindowPosition().winX).toBe(1250);
					done();
				});

				afterEach(function(){
					document.body.style.width = "auto";
					window.scrollTo(0,0);
				});
			});

		});

}