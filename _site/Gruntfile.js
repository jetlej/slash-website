module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'sudo bundle exec jekyll serve --watch --incremental --host 127.0.0.1 --port 80 --livereload'
            }
        },
        watch: {
            css: {
                files: ['css/style.css'],
                options: {
                    livereload : true,
                    spawn: false
                }
            },
            sass: {
                files: ['scss/**/*.{scss,sass}','scss/**/**/*.{scss,sass}'],
                tasks: ['sass:main', 'cachebreaker:css'],
                options: {
                    livereload : false,
                    spawn: true
                }
            },
            js:{
                files: [
                'js/plugins/*',
                ],
                tasks: ['uglify', 'cachebreaker:js']
            },
            mainjs:{
                files: [
                'js/main.js',
                ],
                tasks: ['cachebreaker:mainjs']
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
                    ]
                }
            }
        },
        cachebreaker: {
            mainjs: {
                options: {
                    match: ['main.js'],
                },
                files: {
                    src: ['_includes/footer.html']
                }
            },
            js: {
                options: {
                    match: ['scripts.min.js'],
                },
                files: {
                    src: ['_includes/footer.html']
                }
            },
            css: {
                options: {
                    match: ['style.css'],
                },
                files: {
                    src: ['_includes/head.html']
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
        },
        // run tasks in parallel
        concurrent: {
            serve: [
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    // Load Grunt plugins
    require('load-grunt-tasks')(grunt);

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass:main'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'serve');

};