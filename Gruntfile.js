/**
 * Created by Sagar on 30-Aug-17.
 */
'use strict';
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'dist/build.min.js': ['dist/build.js']
                }
            }
        },
        watch: {
             css: {
                files: ['src/css/*.scss'],
                 tasks: ['sass:dev']
             },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify:dev']
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'build/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }
        },
        sass: {
            dist: {
                files: {
                    'build/css/style.css': ['src/sass/style.scss']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Load the plugin that provides the "uglify" task.

    grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'watch']);
};



