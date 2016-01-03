# ZooMove | jQuery Zoom Image

[![GitHub version](https://badge.fury.io/gh/thompsonemerson%2Fzoomove.svg)](https://badge.fury.io/gh/thompsonemerson%2Fzoomove)
[![Bower version](https://badge.fury.io/bo/zoomove.svg)](https://badge.fury.io/bo/zoomove)
[![npm version](https://badge.fury.io/js/zoomove.svg)](http://badge.fury.io/js/zoomove)

> Is a plugin developed with jQuery, that allows to dynamically zoom the images with mouseover, and view details with mouse move.


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


## How to use
| Property  | Default  | Description |
| :------------ |:---------------:| :-----|
| zoo-image     | -               | The url of the photo to be displayed.                   |
| zoo-scale     | 1.5 (150%)      | Sets the zoom size that should be applied to the image.              |
| zoo-move      | true            | Choose whether the image should move with the mouse move.            |
| zoo-over      |	false           |	With 'over' it is possible to define whether the image may be above. |
| zoo-cursor	  | false	          | Define the cursor pointer or default.                                |

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


## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) |
|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 9+ ✔ |


## Contributing

Help improve these docs. Open an [issue](https://github.com/thompsonemerson/zoomove/issues/new) or submit a pull request.

- Navigate to the main page of the repository
- [Fork it!](https://github.com/thompsonemerson/zoomove#fork-destination-box)
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request =D


## License

[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
