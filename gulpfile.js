// npm install gulp gulp-watch gulp-postcss autoprefixer postcss-simple-vars postcss-nested postcss-import postcss-mixins postcss-hexrgba browser-sync gulp-svg-sprite gulp-rename del webpack --save-dev
// npm install babel-core babel-loader babel-preset-env --save-dev
// npm install gulp-imagemin gulp-usemin gulp-rev gulp-cssnano gulp-uglify --save-dev
// npm install normalize.css jquery lazysizes --save

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/build');

// Generating sprites:
// in command line: gulp icons
// Use in HTML: <span class="icon--name"></span>

// Preview build: 
// in command line: gulp previewDist

// Building website:
// in command line: gulp build

// Deploying on GitHub:
// replace every "dist" term in build.js with "docs"
// in index.html, remove forwardslashes from build path (i.e: replace "build:css /assets/styles/styles.css" with "build:css assets/styles/styles.css")
// in sprite.css and every css file, replace forwardslashes with: background-image: url('../../assets/images/sprites/{{{sprite}}}');