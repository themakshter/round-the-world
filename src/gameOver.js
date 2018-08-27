module.exports = {
  preload: function () {
  },

  create: function () {
    this.continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
    this.modes = ['Capitals', 'Flags', 'Population', 'Currency'];
    this.states = ['capitalState', 'flagState', 'populationState', 'currencyState'];

    this.clickSound = this.game.add.audio('click');

    if (this.game.global.score > localStorage.getItem('' + this.game.global.continentIndex + '' + this.game.global.modeIndex)) {
      localStorage.setItem('' + this.game.global.continentIndex + '' + this.game.global.modeIndex, this.game.global.score);
      this.game.global.highscore[this.game.global.continentIndex][this.game.global.modeIndex] = this.game.global.score;
    }


    this.gameOverText1 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(300), 'myguifont', 'Game Over', this.game.getScaledHeight(120) );
    this.gameOverText1.anchor.set(0.5);
    this.gameOverText2 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(420), 'myfont', 'Continent: ' + this.continents[this.game.global.continentIndex], this.game.getScaledHeight(70) );
    this.gameOverText2.anchor.set(0.5);
    this.gameOverText3 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(500), 'myfont', 'Mode: ' + this.modes[this.game.global.modeIndex], this.game.getScaledHeight(70) );
    this.gameOverText3.anchor.set(0.5);
    this.gameOverText4 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(580), 'myfont', 'Highscore: ' + this.game.global.highscore[this.game.global.continentIndex][this.game.global.modeIndex], this.game.getScaledHeight(70) );
    this.gameOverText4.anchor.set(0.5);
    this.gameOverText4 = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(660), 'myfont', 'Score: ' + this.game.global.score, this.game.getScaledHeight(70) );
    this.gameOverText4.anchor.set(0.5);


    this.btRestart = this.game.add.sprite(this.game.getScaledWidth(1000), this.game.getScaledHeight(800), 'btFlag');
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

    this.btFeedback = this.game.add.sprite(this.game.world.centerX, this.game.getScaledHeight(1000), 'btFlag');
    this.btFeedback.height = this.game.getScaledHeight(this.btFeedback.height)
    this.btFeedback.width = this.game.getScaledWidth(this.btFeedback.width);
    this.btFeedback.anchor.set(0.5);
    this.btFeedback.inputEnabled = true;
    this.btFeedback.events.onInputDown.add(this.feedback, this);
    this.btFeedback = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(1000), 'myfont', 'Feedback', this.game.getScaledHeight(50) );
    this.btFeedback.maxWidth = 300;
    this.btFeedback.align = 'center';
    this.btFeedback.anchor.set(0.5);
  },

  restart: function () {
    this.clickSound.play();
    this.state.start(this.states[this.game.global.modeIndex]);
  },
  feedback: function () {
    window.open("https://www.surveymonkey.co.uk/r/VJ7K3PX", "_blank");
  },

  home: function () {
    this.clickSound.play();
    this.game.state.start('menuState');
  }
};
