const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require("gulp-clean-css");
const browsersync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");

//search paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/images/*"
}

//TASK
// Copy html files
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

//concat and minify js-files
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js')
    );
}

//concat and minify css-files
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(dest('pub/css'))
}

//minify images
function imgTask() {
    return src(files.imgPath)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('pub/images'))
}

//Browsersync - reload the page when changes are made
function somethingHappend() {
    browsersync.init( {
        server: {
            baseDir: './pub/'
        }
    });

    
    //Watching for changes
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath], 
        parallel(copyHTML, jsTask, cssTask, imgTask));

    watch(['pub/js', 'pub/css', 'pub', 'pub/images']).on('change', browsersync.reload);

    }




//default TASKS
exports.default = series(
    parallel(copyHTML, jsTask, cssTask, imgTask),
    somethingHappend
);