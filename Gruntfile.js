module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ngAnnotate: {
			main: {
				files: {
					'assets/js/app.js': [
						'assets/bower/angular/angular.js',
						'assets/bower/angular-animate/angular-animate.js',
						'assets/bower/angular-ui-router/release/angular-ui-router.js',
						'assets/src/js/app.js',
						'assets/src/js/controllers.js'
					]
				}
			}
		},
		less: {
			main: {
				files: {
					'assets/src/css/global.css': 'assets/src/less/global.less',
					'assets/src/css/main.css': 'assets/src/less/main.less'
				}
			}
		},
		concat: {
			main: {
				files: {
					'assets/css/app.css': [
						'assets/bower/bootstrap/dist/css/bootstrap.css',
						'assets/src/css/global.css',
						'assets/src/css/main.css'
					]
				}
			}
		},
		watch: {
			ngAnnotate: {
				files: ['assets/src/js/*.js'],
				tasks: ['ngAnnotate']
			},
			less: {
				files: ['assets/src/less/*.less'],
				tasks: ['less']
			},
			concat: {
				files: ['assets/src/css/*.css'],
				tasks: ['concat']
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.registerTask('default', ['watch']);
};