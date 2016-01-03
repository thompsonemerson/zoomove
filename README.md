# ZooMove

[![GitHub version](https://badge.fury.io/gh/thompsonemerson%2Fzoomove.svg)](https://badge.fury.io/gh/thompsonemerson%2Fzoomove)
[![Bower version](https://badge.fury.io/bo/zoomove.svg)](https://badge.fury.io/bo/zoomove)
[![npm version](https://badge.fury.io/js/zoomove.svg)](http://badge.fury.io/js/zoomove)

> Is a plugin developed with jQuery, that allows to dynamically zoom the images with mouseover, and view details with mouse move. <br>
Compatible with: jQuery 1.7+ in Chrome 42+, Firefox 41+, Safari 9+, Opera 29+, Internet Explorer 9+

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

## License

[MIT License](http://thompsonemerson.mit-license.org/) © Emerson Thompson
