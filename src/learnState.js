module.exports = {
  create: function () {
    this.nextSound = this.game.add.audio('next');
    this.backSound = this.game.add.audio('back');
    this.clickSound = this.game.add.audio('click');

    this.index = 0;
    this.continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];


    this.backBt = this.game.add.sprite(0, this.game.getScaledHeight(10), 'btBack');
    this.backBt.height = this.game.getScaledHeight(this.backBt.height)
    this.backBt.width = this.game.getScaledWidth(this.backBt.width);
    this.backBt.inputEnabled = true;
    this.backBt.events.onInputDown.add(this.home, this);

    this.countries = this.game.global.fullArray[this.game.global.continentIndex].slice(0);
    console.log(this.game.global.continentIndex);
    console.log(this.game.global.fullArray[this.game.global.continentIndex]);

    this.right = this.game.add.sprite(this.game.getScaledWidth(1565), this.world.centerY, 'rightArrow');
    this.right.height = this.game.getScaledHeight(this.right.height)
    this.right.width = this.game.getScaledWidth(this.right.width);
    this.right.scale.setTo(0.5);
    this.right.anchor.set(0.5);
    this.right.inputEnabled = true;
    this.right.events.onInputDown.add(this.next, this);

    this.left = this.game.add.sprite(this.game.getScaledWidth(35), this.world.centerY, 'leftArrow');
    this.left.height = this.game.getScaledHeight(this.left.height)
    this.left.width = this.game.getScaledWidth(this.left.width);
    this.left.scale.setTo(0.5);
    this.left.anchor.set(0.5);
    this.left.inputEnabled = true;
    this.left.events.onInputDown.add(this.back, this);

    this.getInfo = JSON.parse(this.game.cache.getText('infoAF'));;

    this.correctSound = this.game.add.audio('correct');
    this.correctSound2 = this.game.add.audio('correct2');



    this.continentName = this.game.add.bitmapText(this.world.centerX, this.game.getScaledHeight(50) , 'myguifont', 'Countries in ' + this.continents[this.game.global.continentIndex] + '', this.game.getScaledHeight(80) );
    this.continentName.anchor.set(0.5);

    var countryData = this.getInfo[this.countries[this.index]];
    this.cName = this.game.add.bitmapText(this.game.getScaledWidth(500), this.game.getScaledHeight(250), 'myfont', countryData.name, this.game.getScaledHeight(100));
    this.cName.maxWidth = 1100;
    this.cName.align = 'left'

    this.flag = this.game.add.sprite(this.game.getScaledWidth(250), this.game.getScaledHeight(325), this.countries[this.index]);
    this.flag.height = this.game.getScaledHeight(this.flag.height)
    this.flag.width = this.game.getScaledWidth(this.flag.width);
    this.flag.anchor.set(0.5);

    this.cCapital = this.game.add.bitmapText(this.game.getScaledWidth(100), this.game.getScaledHeight(550), 'myfont', "Capital: " + countryData.capital, this.game.getScaledHeight(80) );
    this.cCurrency = this.game.add.bitmapText(this.game.getScaledWidth(100), this.game.getScaledHeight(700), 'myfont', "Currency: " + countryData.currency, this.game.getScaledHeight(80) );
    this.cPopulation = this.game.add.bitmapText(this.game.getScaledWidth(100), this.game.getScaledHeight(850), 'myfont', "Population: " + countryData.population, this.game.getScaledHeight(80) );
  },
  home: function () {
    this.clickSound.play();
    this.game.state.start('menuState');
  },
  next: function () {
    if (this.index < this.countries.length - 1) {
      this.nextSound.play();
      this.flag.destroy();
      this.index += 1;
      this.flag = this.game.add.sprite(this.game.getScaledWidth(250), this.game.getScaledHeight(325), this.countries[this.index]);
      this.flag.height = this.game.getScaledHeight(this.flag.height)
      this.flag.width = this.game.getScaledWidth(this.flag.width);
      this.flag.anchor.set(0.5);
      var countryData = this.getInfo[this.countries[this.index]];
      this.cName.setText(countryData.name);
      this.cCapital.setText("Capital: " + countryData.capital);
      this.cCurrency.setText("Currency: " + countryData.currency);
      this.cPopulation.setText("Population: " + countryData.population);
    }
  },

  back: function () {
    if (this.index > 0) {
      this.backSound.play();
      this.flag.destroy();
      this.index -= 1;
      this.flag = this.game.add.sprite(this.game.getScaledWidth(250), this.game.getScaledHeight(325), this.countries[this.index]);
      this.flag.height = this.game.getScaledHeight(this.flag.height)
      this.flag.width = this.game.getScaledWidth(this.flag.width);
      this.flag.anchor.set(0.5);
      var countryData = this.getInfo[this.countries[this.index]];
      this.cName.setText(countryData.name);
      this.cCapital.setText("Capital: " + countryData.capital);
      this.cCurrency.setText("Currency: " + countryData.currency);
      this.cPopulation.setText("Population: " + countryData.population);
    }
  }
}
