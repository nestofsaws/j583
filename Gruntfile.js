/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {

            build: {
            /*
             * Add custom JS files here
                src: 'assets/js/.js',
                dest: 'assets/js/min/.min.js'
            */
            }
        },
        cssmin: {
            compress: {
                files: {
                    'assets/css/style.min.css': [ 'assets/css/style.css' ]
                }
            }
        },
        jshint: {
            options: {
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false
                }
            },
            files: [ ]
        },
        connect: {
            server: {
                options: {
                    port: port,
                    base: '.',
                    livereload: true,
                }
            }
        },

        // TODO: Set this up correctly
        zip: {
            'reveal-js-presentation.zip': [
                'index.html',
                'css/**',
                'js/**',
                'lib/**',
                'images/**',
                'plugin/**'
            ]
        },
        watch: {
            main: {
                files: ['assets/Gruntfile.js', 'assets/js/*.js', 'assets/css/*.css'],
                tasks: 'default'
            },
            livereload: {
                files: ['assets/*', '*/*.md', '*/*.html'],
            },
        }

    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-zip' );

    // Default task
    grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify'] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'zip' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

    // Run tests
    grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );
};
