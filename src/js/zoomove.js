(function ( $ ) {

    $.fn.ZooMove = function( options ) {

        // config default
        var zoo = $.extend({
            image: 'https://placeholdit.imgix.net/~text?txtsize=30&txt=image+default&w=350&h=350&txttrack=0',
            cursor: 'false',
            scale: '1.5',
            move: 'true',
						over: 'false',
						autosize: 'true'
        }, options );

        // cursor config
        if($(this).attr('data-zoo-cursor')) { zoo.cursor = $(this).attr('data-zoo-cursor'); }
        if(zoo.cursor === 'true') { zoo.cursor = 'pointer'; }
				else{ zoo.cursor = 'default'; }

        this
            .each(function(){
                var thisZoo = $(this); // cache current jquery zoo element

                // if over exist and over true
                if(thisZoo.attr('data-zoo-over')) { zoo.overD = thisZoo.attr('data-zoo-over'); }
                    else{ zoo.overD = zoo.over; }

                if(zoo.overD === 'true'){
                    thisZoo.css({
                        'overflow': 'visible',
                        'z-index': '100'
                    });
                }

                // if image exist
                if(thisZoo.attr('data-zoo-image')) { zoo.imageD = thisZoo.attr('data-zoo-image'); }
										else{ zoo.imageD = zoo.image; }

								// if autosize exist
								if(thisZoo.attr('data-zoo-autosize')) { zoo.autosizeD = thisZoo.attr('data-zoo-autosize'); }
										else{ zoo.autosizeD = zoo.autosize; }

								if(zoo.autosizeD === 'true') {
									$('<img/>',{
											load: function(){
													thisZoo.css('width', this.width + 'px')
													thisZoo.css('height', this.height + 'px')
											},
											src: zoo.imageD
									});
								}

                // create image element background
                thisZoo
                    .append('<div class="zoo-img"></div>')
                    .children('.zoo-img')
                        .css({
                            'background-image': 'url('+ zoo.imageD +')',
                            'cursor': zoo.cursor
                        });
            })

            .on('mouseover', function(e){
                var thisZoo = $(this); // cache current jquery zoo element
                e.preventDefault();

                // if scale exist
                if(thisZoo.attr('data-zoo-scale')) { zoo.scaleD = thisZoo.attr('data-zoo-scale'); }
                    else{ zoo.scaleD = zoo.scale; }

                // if move exist
                if(thisZoo.attr('data-zoo-move')) { zoo.moveD = thisZoo.attr('data-zoo-move'); }
                    else{ zoo.moveD = zoo.move; }

                // change scale
                thisZoo
                    .children('.zoo-img')
                        .css({
                            'transform': 'scale('+ zoo.scaleD +')'
                        });
            })

            .on('mousemove', function(e){
                var thisZoo = $(this); // cache current jquery zoo element
                e.preventDefault();

                // if move true
                if(zoo.moveD === 'true') {
                    // change image position with mouse move
                    thisZoo
                        .children('.zoo-img')
                            .css({
                                'transform-origin':
                                    ((e.pageX - thisZoo.offset().left) / thisZoo.width()) * 100 + '% ' +
                                    ((e.pageY - thisZoo.offset().top) / thisZoo.height()) * 100 + '%'
                            });
                }
            })

            .on('mouseout', function(e){
                var thisZoo = $(this); // cache current jquery zoo element
                e.preventDefault();

                // return initial scale
                thisZoo
                    .children('.zoo-img')
                        .css({
                            'transform': 'scale(1)'
                        });

        });

    };

}( jQuery ));
