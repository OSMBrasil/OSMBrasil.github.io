module.exports = function(grunt) {

	grunt.initConfig({
		browserify: {
			js: {
				files: {
					'js/app.js': 'src/app.js'
				}
			}
		},
		uglify: {
			build: {
				options: {
					mangle: false
				},
				files: {
					'js/app.js': 'js/app.js',
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 4000,
					hostname: '*'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['browserify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask(
		'javascript',
		'Compile scripts.',
		['browserify', 'uglify']
	);

	grunt.registerTask(
		'build',
		'Compiles everything.',
		['javascript']
	);

	grunt.registerTask(
		'default', 
		'Build, start server and watch.', 
		['build', 'connect', 'watch']
	);

}