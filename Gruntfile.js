module.exports = function(grunt) {

	// config
 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			reinstall: ['node_modules']
		},
		connect: {
			server: {
				options: {
					port: 8080,
					keepalive: true,
					hostname: 'localhost',
					base: '.'
				}
			}
		},
		all: ['Gruntfile.js', 'js/*.js']
	});

	// plugin

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// tasks

	grunt.registerTask('serve', function(environment) {
		grunt.log.write('processing.').ok();
		grunt.task.run('connect');
	});

	grunt.registerTask('default', ['serve']);
};