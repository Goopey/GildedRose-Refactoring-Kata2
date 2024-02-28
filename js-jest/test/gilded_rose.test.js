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

describe("Sulfuras", function() {
  const sulfuras = "Sulfuras, Hand of Ragnaros";

  it("should not change quality", function() {
    const gildedRose = new Shop([new Item(sulfuras, 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(sulfuras);
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(10);
  });
});