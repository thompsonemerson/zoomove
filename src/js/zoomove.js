(function ( $ ) {

	$.fn.ZooMove = function( options ) {

		// config default
		var zoo = $.extend({
			image: 'https://placeholdit.imgix.net/~text?txtsize=30&txt=image+default&w=350&h=350&txttrack=0',
			cursor: 'false',
			scale: '1.5',
			move: 'true',
			over: 'false',
			mask: 'transparent' // background-color
		}, options );

		// cursor config
		if(zoo.cursor === 'true') { zoo.cursor = 'pointer'; }
		else{ zoo.cursor = 'default'; }


		this
			.each(function(){
				var this_zoo = $(this); // cache current jquery zoo element

				// don't re-add zoomove if it's already been added to this element
				if(this_zoo.find('> .zoo-img').length) { return; }

				// if over exist and over true
				if(this_zoo.attr('zoo-over')) { zoo.overD = this_zoo.attr('zoo-over'); }
					else{ zoo.overD = zoo.over; }

				if(zoo.overD === 'true'){
					this_zoo.css({
						'overflow': 'visible',
						'z-index': '100'
					});
				}

				// if image exist
				if(this_zoo.attr('zoo-image')) { zoo.imageD = this_zoo.attr('zoo-image'); }
					else if(this_zoo.find('img').length) { // is there an <img> tag in the element?
						zoo.imageD = this_zoo.find('img:first').attr('src'); // use the first image in the element as the zoo image
					}
					else{ zoo.imageD = zoo.image; }

				// set the mask
				if(this_zoo.attr('zoo-mask')) { zoo.maskD = this_zoo.attr('zoo-mask'); }
					else{ zoo.maskD = zoo.mask; }

				// create image element background
				this_zoo
					.prepend('<div class="zoo-img"></div>')
					.children('.zoo-img')
						.css({
							'background-color': zoo.maskD,
							'background-image': 'url('+ zoo.imageD +')',
							'cursor': zoo.cursor
						});
			})

			.on('mouseover', function(e){
				var this_zoo = $(this); // cache current jquery zoo element
				e.preventDefault();

				// if scale exist
				if(this_zoo.attr('zoo-scale')) { zoo.scaleD = this_zoo.attr('zoo-scale'); }
					else{ zoo.scaleD = zoo.scale; }

				// if move exist
				if(this_zoo.attr('zoo-move')) { zoo.moveD = this_zoo.attr('zoo-move'); }
					else{ zoo.moveD = zoo.move; }

				// change scale
				this_zoo
					.children('.zoo-img')
						.css({
							'transform': 'scale('+ zoo.scaleD +')'
						});
			})

			.on('mousemove', function(e){
				var this_zoo = $(this); // cache current jquery zoo element
				e.preventDefault();

				// if move true
				if(zoo.moveD === 'true') {
					// change image position with mouse move
					this_zoo
						.children('.zoo-img')
							.css({
								'transform-origin':
									((e.pageX - this_zoo.offset().left) / this_zoo.width()) * 100 + '% ' +
									((e.pageY - this_zoo.offset().top) / this_zoo.height()) * 100 + '%'
							});
				}
			})

			.on('mouseout', function(e){
				e.preventDefault();

				// return initial scale
				$(this)
					.children('.zoo-img')
						.css({
							'transform': 'scale(1)'
						});

		});

	};

}( jQuery ));