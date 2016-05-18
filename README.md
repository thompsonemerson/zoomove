# ZooMove | jQuery Zoom Image

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](http://thompsonemerson.mit-license.org/)
[![Build Status](https://travis-ci.org/thompsonemerson/zoomove.svg?branch=master)](https://travis-ci.org/thompsonemerson/zoomove)
[![GitHub version](https://badge.fury.io/gh/thompsonemerson%2Fzoomove.svg)](https://badge.fury.io/gh/thompsonemerson%2Fzoomove)
[![Bower version](https://badge.fury.io/bo/zoomove.svg)](https://badge.fury.io/bo/zoomove)
[![npm version](https://badge.fury.io/js/zoomove.svg)](http://badge.fury.io/js/zoomove)

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

Get with npm.

```
$ npm install zoomove --save
```

Or bower.

```
$ bower install zoomove --save
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
<figure class="zoo-item" zoo-image="img/example.jpg"></figure>

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
| zoo-image     | -               | The url of the photo to be displayed.                   |
| zoo-scale     | 1.5 (150%)      | Sets the zoom size that should be applied to the image.              |
| zoo-move      | true            | Choose whether the image should move with the mouse move.            |
| zoo-over      |  false           |  With 'over' it is possible to define whether the image may be above. |
| zoo-cursor    | false            | Define the cursor pointer or default.                                |

```html
<!-- HTML Element -->
<figure
  class="zoo-item"
  zoo-image="[value]"
  zoo-scale="[value]"
  zoo-move="[value]"
  zoo-over="[value]"
  zoo-cursor="[value]"
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
       cursor: '[value]'
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
<figure class="zoo-item" zoo-image="img/example.jpg"></figure>
```

### Image 2

> Scale value `3` (`300%`)

```html
<figure class="zoo-item" zoo-image="img/example.jpg" zoo-scale="3"></figure>
```

### Image 3

> Over `true` and Move `false`

```html
<figure class="zoo-item" zoo-image="img/example.jpg" zoo-over="true" zoo-move="false"></figure>
```

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) |
|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 9+ ✔ |


## Contributing

Find on our [roadmap](https://github.com/thompsonemerson/zoomove/issues/1) the next steps of the project ;) <br>
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
