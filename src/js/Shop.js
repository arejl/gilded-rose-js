const { ConjuredItem } = require("./item_classes/ConjuredItem");
const { Item } = require("./item_classes/Item");
const { Sulfuras } = require("./item_classes/Sulfuras");
const { AgedBrie } = require("./item_classes/AgedBrie");
const { BackstagePass } = require("./item_classes/BackstagePass");

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, sellIn, quality) {
    let newItem;
    switch (true) {
      case name === 'Aged Brie':
        newItem = new AgedBrie(name, sellIn, quality);
        break;
      case /^(backstage passes)/.test(name.toLowerCase()):
        newItem = new BackstagePass(name, sellIn, quality);
        break;
      case name === 'Sulfuras, Hand of Ragnaros':
        newItem = new Sulfuras(name, sellIn, quality);
        break;
      case /^(conjured)/.test(name.toLowerCase()):
        newItem = new ConjuredItem(name, sellIn, quality);
        break;
      default:
        newItem = new Item(name, sellIn, quality);
        break;
    };
    this.items.push(newItem);
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality();
    }
    return this.items;
  }
};

module.exports = { Shop };