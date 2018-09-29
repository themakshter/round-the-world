# round-the-world

[![npm (scoped)](https://img.shields.io/npm/v/@pcs4kids/round-the-world.svg)](https://www.npmjs.com/package/@pcs4kids/round-the-world)

Library wrapper around the educational game to run it in other applications.

## Getting Started

To create an instance of the game, you need to pass in the ID of a div to create and run the game in.

```js

let roundTheWorldGame = require('@pcs4kids/round-the-world');
roundTheWorldGame.createGameInDiv('canvasId');

```

You will also need to copy over the `assets` folder into the main directory you will have the html file running this game. Secondly, you should also incldue the libraries listed as dependencies into your main file as in this project's demo `index.html` as they weren't really designed to be modular. There might be some work to convert them in the future for this library but it's low on priorities.

## Contributing

Before submitting a pull request, please take a moment to look over the [contributing guidelines](CONTRIBUTING.md) first.

## License

`@pcs4kids/round-the-world` is available under the [MIT License](https://opensource.org/licenses/MIT).
