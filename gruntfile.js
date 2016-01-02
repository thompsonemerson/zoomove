module.exports = function ( grunt ) {

	'use strict';


	// ================================================================
	// CONFIG TASKS
	// ================================================================

	grunt.initConfig({

		pkg: grunt.file.readJSON( 'package.json' ),

		banner:
			'/*!\n'+
			' * ZooMove v<%= pkg.version %>\n'+
			' * <%= pkg.homepage %>\n'+
			' *\n'+
			' * Copyright (c) 2016, Emerson Thompson\n'+
			' * Licensed <%= pkg.license %>\n'+
			'*/\n\n',


		// DEFAULT TASK
		// ================================================================

		watch: {
			options: {
				livereload: false
			},
			grunt: {
				files: [
					'gruntfile.js'
				],
				options: {
					reload: true
				}
			},
			sass: {
				files: [
					'src/**/*.sass'
				],
				tasks: [
					'sass',
					'autoprefixer'
				]
			},
			js: {
				files: [
					'src/**/*.js'
				],
				tasks: [
					'uglify',
					'jshint'
				]
			}
		},

		uglify: {
			main: {
				options: {
					banner: '<%= banner %>',
				},
				files: {
					'dist/zoomove.min.js': [ 'src/js/zoomove.js' ],
				},
			},
		},

		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc',
				},
				files: {
					src: [ 'src/js/zoomove.js' ],
				},
			},
		},

		clean: {
			all: [ 'dist' ]
		},

		sass: {
			minify: {
				options: {
					banner: '<%= banner %>',
					noCache: true,
					sourcemap: 'none',
					style: 'compressed'
				},
				files: {
					'dist/zoomove.min.css': [ 'src/**/*.sass', '!src/**/_*.sass' ]
				}
			},
		},

		autoprefixer: {
			minify: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: false
				},
				files: {
					'dist/zoomove.min.css': 'dist/zoomove.min.css'
				}
			},
		}

	});


	// ================================================================
	// REGISTER TASKS
	// ================================================================

	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'clean',
		'uglify',
		'jshint',
		'sass',
		'autoprefixer'
	]);


	// ================================================================
	// LOAD TASKS
	// ================================================================

	require( 'load-grunt-tasks' )( grunt );
	require( 'time-grunt' )( grunt );


};