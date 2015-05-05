/**
 * Created by hellsigner on 3/30/15.
 */

module.exports = function(grunt) {

    var libsPath = 'src/js/libs/vendor';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: [
                    "src/css/*.css"
                ],
                dest: "dist/css/main.css"
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-concat-css');

    // Default task(s).
    grunt.registerTask('default', ['concat_css']);

};


