module.exports = {
  create: function () {
    console.log('inside');
    this.game.global.score = 0;
    this.usedPopulation = [];
    this.ansPost = [{ text: '', choice: '' }, { text: '', choice: '' }, { text: '', choice: '' }, { text: '', choice: '' }];
    this.countriesAF = this.game.global.fullArray[this.game.global.continentIndex].slice(0);
    console.log(this.game.global.continentIndex);
    console.log(this.game.global.fullArray[this.game.global.continentIndex]);

    this.streak = 0;

    this.getInfo;
    this.answer;
    this.options = [];

    this.correctSound = this.game.add.audio('correct');
    this.correctSound2 = this.game.add.audio('correct2');
    this.wrongSound = this.game.add.audio('wrong');
    this.clickSound = this.game.add.audio('click');
    this.overSound = this.game.add.audio('over');
    this.streakSound = this.game.add.audio('streak');


    //get states data from json
    getInfo = JSON.parse(this.game.cache.getText('infoAF'));

    this.questionLine1 = this.game.add.bitmapText(this.world.centerX, 350, 'myfont', "The population of", 80);
    this.questionLine2 = this.game.add.bitmapText(this.world.centerX, 450, 'myfont', "Democratic Republic of the Congo is ?", 80);
    this.questionLine1.anchor.set(0.5);
    this.questionLine2.anchor.set(0.5);


    this.stats = { textS: "", lives: 4 };

    this.txtScore = this.game.add.bitmapText(this.world.centerX, 45, 'myguifont', "SCORE: " + this.game.global.score, 60);
    this.txtScore.anchor.setTo(0.5, 0.5);


    this.backBt = this.game.add.sprite(0, 10, 'btBack');
    this.backBt.inputEnabled = true;
    this.backBt.events.onInputDown.add(this.home, this);

    this.livesImage = this.game.add.sprite(1276, 0, 'lives');
    this.livesImage.frame = 4;
    //stats.text.anchor.setTo(0.5,0.5);

    var index = 0;
    var optYPos = 700;
    var optXPos = 580;

    this.ansPost[0] = this.game.add.sprite(580, 700, 'option');
    this.ansPost[0].anchor.setTo(0.5);

    this.ansPost[1] = this.game.add.sprite(1000, 700, 'option');
    this.ansPost[1].anchor.setTo(0.5);
    this.ansPost[1].scale.x *= -1;

    this.ansPost[2] = this.game.add.sprite(580, 1020, 'option');
    this.ansPost[2].anchor.setTo(0.5);
    this.ansPost[2].scale.y *= -1;

    this.ansPost[3] = this.game.add.sprite(1000, 1020, 'option');
    this.ansPost[3].anchor.setTo(0.5);
    this.ansPost[3].scale.x *= -1;
    this.ansPost[3].scale.y *= -1;

    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 2; i++) {
        this.ansPost[index].text = this.game.add.bitmapText(optXPos, optYPos, 'myfont', '', 45);
        this.ansPost[index].text.maxWidth = 300;
        this.ansPost[index].text.anchor.setTo(0.5);
        this.ansPost[index].text.align = 'center'
        this.ansPost[index].inputEnabled = true;
        this.ansPost[index].events.onInputDown.add(this.checkChoice, this);
        optXPos += 420;
        index += 1;
      }
      optYPos += 320;
      optXPos = 580;
    }

    this.nextQuestion();
  },

  update: function () {

  },

  home: function () {
    this.clickSound.play();
    this.game.state.start('menuState');
  },

  checkChoice: function (choice) {
    if (this.answer == choice.choice) {
      this.correctSound.play();
      choice.frame = 1;
      this.game.time.events.add(Phaser.Timer.SECOND * 0.2, this.correct, this);
    }
    else {
      this.wrong();
      choice.frame = 2;
    }
  },

  wrong: function () {

    if (this.stats.lives <= 0) {
      this.livesImage.alpha = 0;
      this.overSound.play();
      for (var m = 0; m < 4; m++) {
        this.ansPost[m].inputEnabled = false;
        if (this.ansPost[m].choice == this.answer) {
          this.ansPost[m].frame = 1;
        }
      }
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.gameover, this);
    }
    else {
      this.wrongSound.play();
      this.stats.lives -= 1;
      this.streak = 0;
      this.livesImage.frame = this.stats.lives;
    }

  },
  gameover: function () {
    this.game.state.start('gameOver');
  },

  correct: function () {
    console.log("remaining: " + this.countriesAF.length);
    if (this.countriesAF.length <= 1) {
      this.game.state.start('winState');
    }
    else {
      this.game.global.score += 1;
      this.txtScore.setText('SCORE: ' + this.game.global.score);
      this.streak += 1;
      if (this.streak >= 3) { this.bonus(); }
      this.countriesAF.pop()
      this.nextQuestion();
    }
    console.log(this.streak);
  },

  bonus: function () {
    this.streak = 0;
    if (this.stats.lives < 4) {
      this.streakSound.play();
      this.stats.lives += 1;
      this.livesImage.frame = this.stats.lives;
    }
  },
  reset: function () {
    for (var i = 0; i < 4; i++) {
      this.ansPost[i].frame = 0;
      this.ansPost[i].inputEnabled = true;
    }
    this.options = [];

  },
  nextQuestion: function () {
    this.reset();
    Phaser.ArrayUtils.shuffle(this.countriesAF);
    var queCountry = getInfo[this.countriesAF[this.countriesAF.length - 1]];
    this.questionLine2.setText(queCountry.name + " is?");
    this.answer = queCountry.population;
    this.usedPopulation.push(this.answer);
    this.options.push(this.answer);

    if (this.countriesAF.length <= 3) {
      Phaser.ArrayUtils.shuffle(this.usedPopulation);
      for (var i = 2; i < 5; i++) {
        this.options.push(this.usedPopulation[i]);
      }
    }
    else {
      for (var i = 2; i < 5; i++) {
        this.options.push(getInfo[this.countriesAF[this.countriesAF.length - i]].population);
      }

    }
    Phaser.ArrayUtils.shuffle(this.options);

    for (var i = 0; i < 4; i++) {
      this.ansPost[i].text.setText(this.options[i]);
      this.ansPost[i].choice = this.options[i];
    }

  },
};
