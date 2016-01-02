(function ( $ ) {
 
    $.fn.ZooMove = function( options ) {

        // config default
        var zoo = $.extend({
            cursor: 'false',
            scale: '1.5',
            move: 'true',
            over: 'false'
        }, options );

        // cursor config
        if(zoo.cursor === 'true') { zoo.cursor = 'pointer'; }
        else{ zoo.cursor = 'default'; }
        

        this
            .each(function(){

                // if over exist and over true
                if($(this).attr('zoo-over')) { zoo.overD = $(this).attr('zoo-over'); }
                    else{ zoo.overD = zoo.over; }

                if(zoo.overD === 'true'){
                    $(this).css({
                        'overflow': 'visible',
                        'z-index': '100'
                    });
                }

                // create image element background
                $(this)
                    .append('<div class="zoo-img"></div>')
                    .children('.zoo-img')
                        .css({
                            'background-image': 'url('+ $(this).attr('zoo-image') +')',
                            'cursor': zoo.cursor
                        });
            })

            .on('mouseover', function(e){
                e.preventDefault();

                // if scale exist
                if($(this).attr('zoo-scale')) { zoo.scaleD = $(this).attr('zoo-scale'); }
                    else{ zoo.scaleD = zoo.scale; }

                // if move exist
                if($(this).attr('zoo-move')) { zoo.moveD = $(this).attr('zoo-move'); }
                    else{ zoo.moveD = zoo.move; }

                // change scale
                $(this)
                    .children('.zoo-img')
                        .css({
                            'transform': 'scale('+ zoo.scaleD +')'
                        });
            })

            .on('mousemove', function(e){
                e.preventDefault();

                // if move true
                if(zoo.moveD === 'true') {
                    // change image position with mouse move
                    $(this)
                        .children('.zoo-img')
                            .css({
                                'transform-origin': 
                                    ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + 
                                    ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
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