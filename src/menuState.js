module.exports = {
  preload: function () {
  },

  create: function () {
    this.nextSound = this.game.add.audio('next');
    this.backSound = this.game.add.audio('back');
    this.clickSound = this.game.add.audio('click');

    this.left = this.game.add.sprite(this.game.getScaledWidth(200), this.game.getScaledHeight(300), 'leftArrow');
    this.left.height = this.game.getScaledHeight(this.left.height)
    this.left.width = this.game.getScaledWidth(this.left.width);
    this.left.anchor.set(0.5);
    this.left.inputEnabled = true;
    this.left.events.onInputDown.add(this.onLArrowClick, this);

    this.right = this.game.add.sprite(this.game.getScaledWidth(1400), this.game.getScaledHeight(300), 'rightArrow');
    this.right.height = this.game.getScaledHeight(this.right.height)
    this.right.width = this.game.getScaledWidth(this.right.width);
    this.right.anchor.set(0.5);
    this.right.inputEnabled = true;
    this.right.events.onInputDown.add(this.onRArrowClick, this);

    var btCapital = this.game.add.sprite(this.game.getScaledWidth(500), this.game.getScaledHeight(500), 'btFlag');
    btCapital.height = this.game.getScaledHeight(btCapital.height)
    btCapital.width = this.game.getScaledWidth(btCapital.width);
    btCapital.anchor.set(0.5);
    btCapital.inputEnabled = true;
    btCapital.events.onInputDown.add(this.startCapitalMode, this);

    var btFlag = this.game.add.sprite(this.game.getScaledWidth(1100), this.game.getScaledHeight(500), 'btFlag');
    btFlag.height = this.game.getScaledHeight(btFlag.height)
    btFlag.width = this.game.getScaledWidth(btFlag.width);
    btFlag.anchor.set(0.5);
    btFlag.inputEnabled = true;
    btFlag.events.onInputDown.add(this.startFlagMode, this);

    var btPopulation = this.game.add.sprite(this.game.getScaledWidth(500), this.game.getScaledHeight(900), 'btFlag', this.game.getScaledHeight(50) );
    btPopulation.height = this.game.getScaledHeight(btPopulation.height)
    btPopulation.width = this.game.getScaledWidth(btPopulation.width);
    btPopulation.anchor.set(0.5);
    btPopulation.inputEnabled = true;
    btPopulation.events.onInputDown.add(this.startPopulationMode, this);

    var btCurrency = this.game.add.sprite(this.game.getScaledWidth(1100), this.game.getScaledHeight(900), 'btFlag', this.game.getScaledHeight(50) );
    btCurrency.height = this.game.getScaledHeight(btCurrency.height)
    btCurrency.width = this.game.getScaledWidth(btCurrency.width);
    btCurrency.anchor.set(0.5);
    btCurrency.inputEnabled = true;
    btCurrency.events.onInputDown.add(this.startCurrencyMode, this);

    var btLearn = this.game.add.sprite(this.world.centerX, this.game.getScaledHeight(700), 'btFlag', this.game.getScaledHeight(50) );
    btLearn.height = this.game.getScaledHeight(btLearn.height)
    btLearn.width = this.game.getScaledWidth(btLearn.width);
    btLearn.anchor.set(0.5);
    btLearn.inputEnabled = true;
    btLearn.events.onInputDown.add(this.startLearnMode, this);

    var btLearnText = this.game.add.bitmapText(this.world.centerX, this.game.getScaledHeight(700), 'myfont', 'Learn', this.game.getScaledHeight(50) );
    btLearnText.anchor.set(0.5);

    var btCapitalText = this.game.add.bitmapText(this.game.getScaledWidth(500), this.game.getScaledHeight(500), 'myfont', 'Capitals', this.game.getScaledHeight(50) );
    btCapitalText.anchor.set(0.5);

    var btFlagText = this.game.add.bitmapText(this.game.getScaledWidth(1100), this.game.getScaledHeight(500), 'myfont', 'Flags', this.game.getScaledHeight(50) );
    btFlagText.anchor.set(0.5);

    var btPopulationText = this.game.add.bitmapText(this.game.getScaledWidth(500), this.game.getScaledHeight(900), 'myfont', 'Population', this.game.getScaledHeight(50) );
    btPopulationText.anchor.set(0.5);

    var btCurrencyText = this.game.add.bitmapText(this.game.getScaledWidth(1100), this.game.getScaledHeight(900), 'myfont', 'Currency', this.game.getScaledHeight(50) );
    btCurrencyText.anchor.set(0.5);

    this.Continents = ['Africa', 'Americas', 'Asia', 'Australia', 'Europe'];
    this.txtContinent = this.game.add.bitmapText(this.game.world.centerX, this.game.getScaledHeight(300), 'myfont', this.Continents[this.game.global.continentIndex], this.game.getScaledHeight(100) );
    this.txtContinent.anchor.set(0.5);

  },

  onLArrowClick: function () {
    this.backSound.play();
    if (this.game.global.continentIndex <= 0) {
      this.game.global.continentIndex = 5;
    }
    this.game.global.continentIndex -= 1;
    this.txtContinent.setText("" + this.Continents[this.game.global.continentIndex]);
  },

  onRArrowClick: function () {
    this.nextSound.play();
    if (this.game.global.continentIndex >= 4) {
      this.game.global.continentIndex = -1;
    }
    this.game.global.continentIndex += 1;
    this.txtContinent.setText("" + this.Continents[this.game.global.continentIndex]);
  },

  startCapitalMode: function () {
    this.clickSound.play();
    this.alpha = 0.5;
    //this.game.time.events.add(Phaser.Timer.SECOND * 0.2, this.correct, this);
    this.state.start('capitalState');
    this.game.global.modeIndex = 0;
  },

  startFlagMode: function () {
    this.clickSound.play();
    //this.updateModeArrays();
    this.state.start('flagState');
    this.game.global.modeIndex = 1;
  },

  startPopulationMode: function () {
    console.log('outside');
    this.clickSound.play();
    // this.updateModeArrays();
    this.state.start('populationState');
    this.game.global.modeIndex = 2;
  },
  startCurrencyMode: function () {
    console.log('outside');
    this.clickSound.play();
    // this.updateModeArrays();
    this.state.start('currencyState');
    this.game.global.modeIndex = 3;
  },
  startLearnMode: function () {
    console.log('outside');
    this.clickSound.play();
    // this.updateModeArrays();
    this.state.start('learnState');
  },
  updateModeArrays: function () {
    this.game.global.modeArray = this.game.global.fullArray[this.game.global.modeIndex];
  }
};
