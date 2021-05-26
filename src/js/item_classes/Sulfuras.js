const { Item } = require("./Item");

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    return;
  }
};

module.exports = { Sulfuras };