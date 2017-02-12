module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        css_mqpacker: {
			main: {
				options : {
	                map : false,
	                sort: false
	            },
				expand  : true,
				cwd     : 'htdocs/assets/css/',
				src     : '*.css',
				dest    : 'htdocs/assets/css/'
			}
		}
    });

    grunt.registerTask('default', ['css_mqpacker']);
};
