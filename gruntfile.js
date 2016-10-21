module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // Variables
    var gulp = require('gulp'),
        styleguide = require('sc5-styleguide'),
        kodekitPath = '../kodekit-ui/src',
        styleguideAppRoot = './docs',
        srcPath = 'src',
        distPath = 'dist',
        docsPath = 'docs',
        bsport = 1234;

    // grunt config
    grunt.initConfig({

        // Grunt variables
        srcPath: srcPath,
        distPath: distPath,
        docsPath: docsPath,


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        "<%= distPath %>/*.*",
                        "<%= distPath %>/**/*.*"
                    ]
                },
                options: {
                    port: bsport,
                    server: '<%= docsPath %>',
                    open: true,
                    notify: false,
                    watchTask: true,
                    injectChanges: false
                }
            }
        },


        // Compile sass files
        sass: {
            dist: {
                files: {
                    '<%= distPath %>/css/admin.css': '<%= srcPath %>/scss/joomlatools-ui.scss',
                    '<%= distPath %>/css/component.css': '<%= srcPath %>/scss/component.scss',
                    '<%= distPath %>/css/hathor.css': '<%= srcPath %>/scss/hathor.scss',
                    '<%= distPath %>/css/isis.css': '<%= srcPath %>/scss/isis.scss',
                    '<%= docsPath %>/joomlatools/css/docs.css': 'docs-src/docs.scss'
                }
            }
        },


        // Minify and clean CSS
        cssmin: {
            options: {
                roundingPrecision: -1,
                sourceMap: true
            },
            site: {
                files: [{
                    expand: true,
                    src: ['<%= distPath %>/css/*.css', '!*.css']
                }]
            }
        },


        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions', 'ie 11']
            },
            files: {
                expand: true,
                flatten: true,
                src: '<%= distPath %>/css/*.css',
                dest: '<%= distPath %>/css/'
            }
        },


        // Gulp commands
        gulp: {
            'styleguide-generate': function() {
                return gulp.src([
                    kodekitPath + '/scss/kodekit-ui.scss',
                    kodekitPath + '/scss/core/_core.scss',
                    kodekitPath + '/scss/atoms/*.scss',
                    kodekitPath + '/scss/layout/*.scss',
                    kodekitPath + '/scss/molecules/*.scss',
                    kodekitPath + '/scss/organisms/*.scss',
                    kodekitPath + '/scss/templates/*.scss',
                    kodekitPath + '/scss/utilities/*.scss'
                ])
                    .pipe(styleguide.generate({
                        title: 'Joomlatools UI Docs',
                        rootPath: styleguideAppRoot, // This is where resources are loaded from
                        appRoot: './', // This is where the styleguide is rendered
                        overviewPath: './src/README.md',
                        disableEncapsulation: true,
                        disableHtml5Mode: true,
                        commonClass: 'koowa-container koowa',
                        styleVariables: false,
                        readOnly: true,
                        server: true,
                        /*styleguideProcessors: {
                            30: function(styleguide) {
                                console.log('foo');
                                styleguide.sections.forEach(function(section) {
                                    if (typeof section.markup !== 'string') return;
                                    section.markup = '' +
                                        '<link href="http://localhost:3000/joomlatools/css/admin.css" rel="stylesheet" type="text/css">' +
                                        '<link href="http://localhost:3000/joomlatools/css/docs.css" rel="stylesheet" type="text/css">' +
                                        '<script type="text/javascript" src="http://localhost:3000/joomlatools/js/build/jquery.js"></script>' +
                                        '<script type="text/javascript" src="http://localhost:3000/joomlatools/js/build/admin.js"></script>' +
                                        section.markup;

                                    section.renderMarkup = `<iframe srcdoc='${section.markup}'></iframe>`;
                                });
                            }
                        },*/
                        extraHead: [
                            '<link href="joomlatools/css/admin.css" rel="stylesheet" type="text/css">',
                            '<link href="joomlatools/css/docs.css" rel="stylesheet" type="text/css">',
                            '<script src="joomlatools/js/build/modernizr.js"></script>',
                            '<script src="joomlatools/js/build/jquery.js"></script>',
                            '<script src="joomlatools/js/loadjs.js"></script>',
                            '<script src="joomlatools/js/styleguide.js"></script>'
                        ],
                        afterBody: [
                            '<script data-inline type="text/javascript">var el = document.body; var cl = "k-js-enabled"; if (el.classList) { el.classList.add(cl); }else{ el.className += " " + cl;}</script>'
                        ]
                    }
                )).pipe(gulp.dest(styleguideAppRoot)); // This is where the styleguide source files get rendered
            }
        },


        // Copy
        copy: {
            KUItoJUI: {
                files: [
                    {
                        expand: true,
                        src: ['../kodekit-ui/dist/fonts/k-icons/*.*'],
                        dest: '<%= distPath %>/fonts/k-icons',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['../kodekit-ui/dist/js/build/*.*'],
                        dest: '<%= distPath %>/js/build',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['../kodekit-ui/dist/js/min/*.*'],
                        dest: '<%= distPath %>/js/min',
                        flatten: true
                    }
                ]
            },
            JUItoDocs: {
                files: [
                    {
                        expand: true,
                        src: ['<%= distPath %>/css/admin.css'],
                        dest: '<%= docsPath %>/joomlatools/css',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['<%= distPath %>/js/build/*.*'],
                        dest: '<%= docsPath %>/joomlatools/js/build',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['<%= distPath %>/fonts/k-icons/*.*'],
                        dest: '<%= docsPath %>/joomlatools/fonts/k-icons',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['docs-src/*.js'],
                        dest: '<%= docsPath %>/joomlatools/js',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['docs-src/*.png'],
                        dest: '<%= docsPath %>/joomlatools/images',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['docs-src/CNAME'],
                        dest: '<%= docsPath %>',
                        flatten: true
                    }
                ]
            }
        },


        // Shell commands
        shell: {
            updateCanIUse: {
                command: 'npm update caniuse-db'
            }
        },


        // Watch files
        watch: {
            sass: {
                files: [
                    // Kodekit UI
                    '../kodekit-ui/src/scss/*.scss',
                    '../kodekit-ui/src/scss/**/*.scss',

                    // Joomlatools UI
                    '<%= srcPath %>/scss/*.scss',
                    '<%= srcPath %>/scss/**/*.scss',

                    // Sourcefiles
                    'docs-src/*.scss'
                ],
                tasks: ['sass', 'cssmin', 'autoprefixer', 'copy', 'gulp'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            uglify: {
                files: [
                    // Kodekit UI
                    '../kodekit-ui/dist/js/build/*.js'
                ],
                tasks: ['copy'],
                options: {
                    interrupt: true,
                    atBegin: false
                }
            },
            docssrc: {
                files: [
                    'docs-src/*.*'
                ],
                tasks: ['copy'],
                options: {
                    interrupt: true,
                    atBegin: false
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('default', ['shell', 'copy:KUItoJUI', 'gulp:styleguide-generate', 'watch']);

    // create Styleguide
    grunt.registerTask('styleguide', ['sass', 'copy:KUItoJUI', 'cssmin', 'autoprefixer', 'gulp:styleguide-generate']);

};