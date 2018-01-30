// npm install gulp gulp-watch gulp-postcss autoprefixer postcss-simple-vars postcss-nested postcss-import postcss-mixins postcss-hexrgba browser-sync gulp-svg-sprite gulp-rename del webpack --save-dev
// npm install babel-core babel-loader babel-preset-env --save-dev
// npm install jquery --save

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');

// Generating sprites:
// in command line : gulp icons
// Use in HTML: <span class="icon--name"></span>