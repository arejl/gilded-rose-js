const { Item } = require("./Item");

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    this.sellIn--;
    if (this.quality === 0) return;
    this.quality -= 2;
    if (this.sellIn < 0) this.quality -= 2;
    if (this.quality < 0) this.quality = 0;
  }
};

module.exports = { ConjuredItem };
