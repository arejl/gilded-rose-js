const { Item } = require("./Item");

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    this.sellIn--;
    if (this.quality < 50) this.quality++;
  }
};

module.exports = { AgedBrie };