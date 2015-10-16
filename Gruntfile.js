module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pleeease: {
            custom: {
                options: {
                    autoprefixer: true,
                    minifier: true,
                    pseudoElements: true,
                    mqpacker: true
                },
                files: {
                    'htdocs/assets/css/': 'htdocs/assets/css/*.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-pleeease');
    grunt.registerTask('default', ["pleeease"]);
};
