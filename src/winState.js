module.exports = {
  create: function () {
    this.wonSound = this.game.add.audio('won');
    this.wonSound.play();
    this.continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
    this.modes = ['Capitals', 'Flags', 'Population', 'Currency'];
    this.states = ['capitalState', 'flagState', 'populationState', 'currencyState'];

    this.clickSound = this.game.add.audio('click');

    this.gameOverText1 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(300), 'myguifont', 'You did it!', this.game.getScaledHeight(120) );
    this.gameOverText1.anchor.set(0.5);
    this.gameOverText2 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(500) , 'myfont', "You've mastered the " + this.modes[this.game.global.modeIndex] + " of \n " + this.continents[this.game.global.continentIndex], this.game.getScaledHeight(70) );
    this.gameOverText2.anchor.set(0.5);
    this.gameOverText2.align = 'center'

    if (this.game.global.score > localStorage.getItem('' + this.game.global.continentIndex + '' + this.game.global.modeIndex)) {
      localStorage.setItem('' + this.game.global.continentIndex + '' + this.game.global.modeIndex, this.game.global.score);
      this.game.global.highscore[this.game.global.continentIndex][this.game.global.modeIndex] = this.game.global.score;
    }

    this.btRestart = this.game.add.sprite(this.game.getScaledWidth(1000) , this.game.getScaledHeight(800), this.game.global.modeButton[this.game.global.modeIndex]);
    this.btRestart.height = this.game.getScaledHeight(this.btRestart.height)
    this.btRestart.width = this.game.getScaledWidth(this.btRestart.width);
    this.btRestart.anchor.set(0.5);
    this.btRestart.inputEnabled = true;
    this.btRestart.events.onInputDown.add(this.restart, this);
    this.txtRestart = this.game.add.bitmapText(this.game.getScaledWidth(1000), this.game.getScaledHeight(800), 'myfont', 'Restart', this.game.getScaledHeight(50) );
    this.txtRestart.anchor.set(0.5);

    this.btHome = this.game.add.sprite(this.game.getScaledWidth(600), this.game.getScaledHeight(800), 'btFlag');
    this.btHome.height = this.game.getScaledHeight(this.btHome.height)
    this.btHome.width = this.game.getScaledWidth(this.btHome.width);
    this.btHome.anchor.set(0.5);
    this.btHome.inputEnabled = true;
    this.btHome.events.onInputDown.add(this.home, this);
    this.txtHome = this.game.add.bitmapText(this.game.getScaledWidth(600), this.game.getScaledHeight(800), 'myfont', 'Main Menu', this.game.getScaledHeight(50) );
    this.txtHome.anchor.set(0.5);
  },

  restart: function () {
    this.clickSound.play();
    this.state.start(this.states[this.game.global.modeIndex]);
  },

  home: function () {
    this.clickSound.play();
    this.game.state.start('menuState');
  }
};
