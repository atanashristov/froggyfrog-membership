module.exports = function(grunt){

  grunt.initConfig({
    jshint : {
      files : ['lib/**/*js', 'models/**/*.js']
    },
    mochaTest : {
      files : ['test/**/*.js', 'lib/**/*js', 'models/**/*.js']
    },
    watch : {
      files : ['test/**/*.js', 'lib/**/*js', 'models/**/*.js'],
      tasks : ['jshint', 'mochaTest']
    },
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-mocha-test");
}
