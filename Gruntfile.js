module.exports = function(grunt) {
  // Configure Grunt
  grunt.initConfig({

    // base configure
    pkg: grunt.file.readJSON('package.json'),

    // SASS
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'src/includes/templateIncludes/css/main.css' : 'src/includes/templateIncludes/scss/main.scss'
        }
      }
    },

    // js concat
    concat: {
      dist: {
        src: [
          'src/includes/templateIncludes/js/build/*.js',
        ],
        dest: 'src/includes/templateIncludes/js/production/main.js',
      }
    },

    // js minifiy
    uglify: {
      build: {
        src: 'src/includes/templateIncludes/js/production/main.js',
        dest: 'src/includes/templateIncludes/js/production/main.min.js'
      }
    },

    // watch the files for changes
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['src/includes/templateIncludes/js/build/*.js'],
        tasks: ['concat', 'uglify'],
      },
      css: {
        files: ['public_html/scss/*.scss'],
        tasks: ['sass'],
      },
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};