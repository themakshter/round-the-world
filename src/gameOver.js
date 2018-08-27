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


    this.gameOverText1 = this.game.add.bitmapText(this.game.world.centerX, 300, 'myguifont', 'Game Over', 120);
    this.gameOverText1.anchor.set(0.5);
    this.gameOverText2 = this.game.add.bitmapText(this.game.world.centerX, 420, 'myfont', 'Continent: ' + this.continents[this.game.global.continentIndex], 70);
    this.gameOverText2.anchor.set(0.5);
    this.gameOverText3 = this.game.add.bitmapText(this.game.world.centerX, 500, 'myfont', 'Mode: ' + this.modes[this.game.global.modeIndex], 70);
    this.gameOverText3.anchor.set(0.5);
    this.gameOverText4 = this.game.add.bitmapText(this.game.world.centerX, 580, 'myfont', 'Highscore: ' + this.game.global.highscore[this.game.global.continentIndex][this.game.global.modeIndex], 70);
    this.gameOverText4.anchor.set(0.5);
    this.gameOverText4 = this.game.add.bitmapText(this.game.world.centerX, 660, 'myfont', 'Score: ' + this.game.global.score, 70);
    this.gameOverText4.anchor.set(0.5);

    this.btRestart = this.game.add.sprite(1000, 800, 'btFlag');
    this.btRestart.anchor.set(0.5);
    this.btRestart.inputEnabled = true;
    this.btRestart.events.onInputDown.add(this.restart, this);
    this.txtRestart = this.game.add.bitmapText(1000, 800, 'myfont', 'Restart', 50);
    this.txtRestart.anchor.set(0.5);

    this.btHome = this.game.add.sprite(600, 800, 'btFlag');
    this.btHome.anchor.set(0.5);
    this.btHome.inputEnabled = true;
    this.btHome.events.onInputDown.add(this.home, this);
    this.txtHome = this.game.add.bitmapText(600, 800, 'myfont', 'Main Menu', 50);
    this.txtHome.anchor.set(0.5);

    this.btFeedback = this.game.add.sprite(this.game.world.centerX, 1000, 'btFlag');
    this.btFeedback.anchor.set(0.5);
    this.btFeedback.inputEnabled = true;
    this.btFeedback.events.onInputDown.add(this.feedback, this);
    this.btFeedback = this.game.add.bitmapText(this.game.world.centerX, 1000, 'myfont', 'Give us Feedback', 50);
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
