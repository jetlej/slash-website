module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['scss/**/*.{scss,sass}','scss/**/**/*.{scss,sass}'],
                tasks: ['sass:main', 'cachebreaker:css']
            },
            js:{
                files: [
                'js/plugins/*',
                'js/main.js',
                ],
                tasks: ['uglify', 'cachebreaker:js']
            },
            icons:{
                files: ['images/icons/*'],
                tasks: ['webfont:icons']
            }
        },
        sass: {
            main: {
                options: {
                    sourcemap: 'file'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            },
        },
        autoprefixer : {
            options : {
                browsers : ['last 2 versions', 'ie 8', 'ie 9']
            },
            dist : {
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                preserveComments: false,
                sourceMap: true
            },
            my_target: {
                files: {
                    'js/scripts.min.js': [
                    'js/plugins/*',
                    'js/main.js'
                    ]
                }
            }
        },
        cachebreaker: {
            js: {
                options: {
                    match: ['scripts.min.js'],
                },
                files: {
                    src: ['index.html']
                }
            },
            css: {
                options: {
                    match: ['style.css'],
                },
                files: {
                    src: ['index.html']
                }
            }
        },
        webfont: {
            icons: {
                src: 'images/icons/*.svg',
                dest: 'fonts',
                destCss: 'scss',
                options: {
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts',
                    engine: 'node',
                    htmlDemo: false,
                    templateOptions: {
                        baseClass: 'icon',
                        classPrefix: 'icon-',
                        mixinPrefix: 'icon-'
                    }
                }
            }
        }
    });

    // Load Grunt plugins
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', [
      'watch'
      ]);

};