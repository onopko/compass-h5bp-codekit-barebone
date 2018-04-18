module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
		filesize: {
			base: {
				files: [{
					expand: true,
					cwd: 'htdocs/assets/css/',
					src: ['*.css']
				}]
			}
		},
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

    grunt.registerTask('default', ['filesize', 'css_mqpacker', 'filesize']);
};
