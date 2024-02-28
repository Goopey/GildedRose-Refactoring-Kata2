const {Shop, Item} = require("../src/gilded_rose");

describe("Test unit tests", function() {
  it("test", function() {
    expect(5).toBe(5);
  })
});

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
