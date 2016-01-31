import { Scrolla } from "./scrolla/scrolla";

describe("Scrolla", function() {
	it("Say hi", function() {
        var scrolla = new Scrolla();
        expect(scrolla.sayHi()).toBe("Yo mama");
    });
    it("Say bye", function() {
        expect(false).toBe(true);
    });

});