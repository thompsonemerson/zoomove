# ZooMove | jQuery Zoom Image

[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://thompsonemerson.github.io/zoomove)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](http://thompsonemerson.mit-license.org/)
[![Build Status](https://travis-ci.org/thompsonemerson/zoomove.svg?branch=master)](https://travis-ci.org/thompsonemerson/zoomove)
[![GitHub version](https://badge.fury.io/gh/thompsonemerson%2Fzoomove.svg)](https://badge.fury.io/gh/thompsonemerson%2Fzoomove)
[![Bower version](https://badge.fury.io/bo/zoomove.svg)](https://badge.fury.io/bo/zoomove)
[![npm version](https://badge.fury.io/js/zoomove.svg)](http://badge.fury.io/js/zoomove)
[![CDNJS version](https://img.shields.io/cdnjs/v/zoomove.svg)](https://cdnjs.com/libraries/zoomove)

> It's a plugin developed with jQuery, that allows to dynamically zoom images with mouseover, and view details with mouse move.

## Table of Contents

- [Install](#install)
- [Setup](#setup)
- [How to Use](#how-to-use)
- [Examples](#examples)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## Install

Get with npm

```bash
$ npm install zoomove --save
```

bower

```bash
$ bower install zoomove --save
```

yarn

```bash
$ yarn install zoomove
```

Or CDN (by [cdnjs](https://cdnjs.com/))

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/zoomove/1.2.1/zoomove.min.css">

<!-- JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/zoomove/1.2.1/zoomove.min.js"></script>
```

If you prefer you can just [download a ZIP](https://github.com/thompsonemerson/zoomove/archive/master.zip) file.


## Setup

First, include the script located on the `dist` folder.

```html
<!-- ZooMove CSS minified -->
<link rel="stylesheet" href="dist/zoomove.min.css">

<!-- jQuery CDN JS minified (must) -->
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

<!-- ZooMove JS minified -->
<script src="dist/zoomove.min.js"></script>
```

Now need to prepare our(s) image(s) and show to the ZooMove.
```html
<!-- Item image -->
<figure class="zoo-item" data-zoo-image="img/example.jpg"></figure>

<!-- Starting the ZooMove -->
<script>
   $('.zoo-item').ZooMove();
</script>
```

Ready, prepared environment, now is hour of our plugin take action and prepare all remaining process. <br>
Now says it is not easy?! ;)


## How to Use

| Property  | Default  | Description |
| :------------ |:---------------:| :-----|
| data-zoo-image     | -               | The url of the photo to be displayed.                   							|
| data-zoo-scale     | 1.5 (150%)      | Sets the zoom size that should be applied to the image.              |
| data-zoo-move      | true            | Choose whether the image should move with the mouse move.            |
| data-zoo-over      | false           | With 'over' it is possible to define whether the image may be above. |
| data-zoo-cursor    | false           | Define the cursor pointer or default.                                |
| data-zoo-autosize  | true            | sets the size of the automatic image.                                |

```html
<!-- HTML Element -->
<figure
  class="zoo-item"
  data-zoo-image="[value]"
  data-zoo-scale="[value]"
  data-zoo-move="[value]"
  data-zoo-over="[value]"
  data-zoo-cursor="[value]"
  data-zoo-autosize="[value]"
  >
</figure>
```

```html
<!-- JavaScript -->
<script>
   $('.zoo-item').ZooMove({
       image: '[value]',
       scale: '[value]',
       move: '[value]',
       over: '[value]',
       cursor: '[value]',
       autosize: '[value]'
   });
</script>
<!-- Thus it is applied universally -->
```

## Examples

>  Images by [lorempixel](http://lorempixel.com).

![GIFs <3](https://media.giphy.com/media/3o6ozmHwJIzCaBadgI/giphy.gif)

### Image 1

> Default

```html
<figure class="zoo-item" data-zoo-image="img/example.jpg"></figure>
```

### Image 2

> Scale value `3` (`300%`)

```html
<figure class="zoo-item" data-zoo-image="img/example.jpg" data-zoo-scale="3"></figure>
```

### Image 3

> Over `true` and Move `false`

```html
<figure class="zoo-item" data-zoo-image="img/example.jpg" data-zoo-over="true" data-zoo-move="false"></figure>
```

## Browser Support

| <img src="http://i.imgur.com/luDsuvw.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/puSpCj0.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://i.imgur.com/PrDuPeI.png" width="48px" height="48px" alt="IE logo"> | <img src="https://i.imgur.com/nhAH49O.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://i.imgur.com/GpMpdFE.png" width="48px" height="48px" alt="Safari logo"> | <img src="https://i.imgur.com/4zSy2WO.png" width="48px" height="48px" alt="Edge logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 9+ ✔ | 12+ ✔ |


## Contributing

Help improve these docs. Open an [issue](https://github.com/thompsonemerson/zoomove/issues/new) or submit a pull request.

1. Navigate to the main page of the repository
1. [Fork it!](https://github.com/thompsonemerson/zoomove#fork-destination-box)
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -m 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request =D

## History

See [Releases](https://github.com/thompsonemerson/zoomove/releases) for detailed changelog.

## License

[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
