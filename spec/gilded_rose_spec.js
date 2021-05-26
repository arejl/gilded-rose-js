const { Shop } = require("../src/js/Shop");

describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("+5 Dexterity Vest", 10, 20);
    gildedRose.addItem("Mana Cake", 3, 6);

    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    const gildedRose = new Shop(listItems);
    gildedRose.addItem("Aged Brie", 20, 30);
    gildedRose.addItem("Backstage passes to a TAFKAL80ETC concert", 20, 30);


    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});