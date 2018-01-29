// npm install gulp gulp-watch gulp-postcss autoprefixer postcss-simple-vars postcss-nested postcss-import postcss-mixins postcss-hexrgba browser-sync gulp-svg-sprite gulp-rename del --save-dev

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');


// Generating sprites:
// in command line : gulp icons
// Use in HTML: <span class="icon--name"></span>