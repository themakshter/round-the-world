module.exports = {
  // set background colour for the game, center game, and scale for all devices
  init: function () {
    this.game.stage.backgroundColor = "#CDEDFD";
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    this.game.load.bitmapFont('myfont', 'assets/round-the-world/fonts/fontshadow.png', 'assets/round-the-world/fonts/fontshadow.fnt');
    this.load.image('loadingBar', 'assets/round-the-world/images/loading.png');
    this.load.image('globe', 'assets/round-the-world/images/globe.png');
  },

  create: function () {
    this.state.start('preloadState');
  }
};
