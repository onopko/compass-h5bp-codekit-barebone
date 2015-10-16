# postcss-color [![Build Status](https://travis-ci.org/postcss/postcss-color.png)](https://travis-ci.org/postcss/postcss-color)

> [PostCSS](https://github.com/postcss/postcss) plugin to transform latest [W3C CSS color module](http://dev.w3.org/csswg/css-color/#modifying-colors) syntax to more compatible CSS.

This plugin can:

- transform [`color()`](http://dev.w3.org/csswg/css-color/#modifying-colors) to `rgb()` (or `rgba()`).
- transform [RGBA hexadecimal notations (`#RRGGBBAA` or `#RGBA`)](http://dev.w3.org/csswg/css-color/#hex-notation) to `rgba()`.
- transform [`hwb()`](http://dev.w3.org/csswg/css-color/#the-hwb-notation) to `rgb()` (or `rgba()`).
- transform [`rebeccapurple`](http://dev.w3.org/csswg/css-color/#valuedef-color-rebeccapurple) to `rgb()`.

## Installation

    $ npm install postcss-color

## Usage

```js
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var color = require("postcss-color")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(color())
  .process(css)
  .css
```

Using this `input.css`:

```css
body {
  background:
    rgb(102, 51, 153)
    linear-gradient(
      color(rebeccapurple a(50%)),
      hwb(0, 20%, 40%),
      color(hwb(0, 20%, 40%, .5) a(+10%)),
      color(#9d9c a(90%))
    )
}

```

you will get:

```css
body {
  background:
    rgb(102, 51, 153)
    linear-gradient(
      rgba(102, 51, 153, 0.5),
      rgb(153, 51, 51),
      rgba(153, 51, 51, 0.55),
      rgba(153, 221, 153, 0.9)
    )
}
```

Checkout [tests](test) for more examples.

### Options

#### `color` (default: `true`)

Allow you to disable transformation of `color()`

#### `hexAlpha` (default: `true`)

Allow you to disable transformation of `#RRGGBBAA` or `#RGBA`

#### `hwb` (default: `true`)

Allow you to disable transformation of `hwb()`

#### `rebeccapurple` (default: `true`)

Allow you to disable transformation of `rebeccapurple`

---

## Contributing

Work on a branch, install dev-dependencies, respect coding style & run tests before submitting a bug fix or a feature.

    $ git clone https://github.com/postcss/postcss-color.git
    $ git checkout -b patch-1
    $ npm install
    $ npm test

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
