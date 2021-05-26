const { Item } = require("./Item");

class BackstagePass extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  };

  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) return this.quality = 0;
    if (this.quality >= 50) return;
    this.quality++;
    if (this.sellIn < 10 && this.quality < 50) this.quality++;
    if (this.sellIn < 5 && this.quality < 50) this.quality++;
  }
};

module.exports = { BackstagePass };