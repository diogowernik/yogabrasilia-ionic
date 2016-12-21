var dist = 'yoga-brasilia/www/';

var scriptSrc = ['src/assets/vendor/jquery/dist/jquery.min.js',
'src/assets/vendor/ngCordova/dist/ng-cordova.min.js',
'src/assets/vendor/ng-token-auth/dist/ng-token-auth.min.js',
'src/assets/vendor/angular-cookie/angular-cookie.min.js',
'src/app.module.js', 
'src/**/*.controller.js', 
'src/app.state.js', 
'src/**/*.state.js'
]

var bS 				= require('browser-sync').create(),
	concat 			= require('gulp-concat'),
	flatten 		= require('gulp-flatten'),
	gulp 			= require('gulp'),
	gutil			= require('gulp-util'),
	imagemin 		= require('gulp-imagemin'),
	plumber			= require('gulp-plumber'),
	pug 			= require('gulp-pug'),
	sass			= require('gulp-sass'),
	spa				= require('connect-history-api-fallback'),
	uglify 			= require('gulp-uglify');


var errHandler = function(err){
	gutil.beep();
	gutil.log(gutil.colors.red('! ! ! ! ! ! ! ! ! !  Error ! ! ! ! ! ! ! ! ! ! '));
	gutil.log(gutil.colors.blue(err));
	gutil.log(gutil.colors.red('! ! ! ! ! ! ! ! ! ! !  End ! ! ! ! ! ! ! ! ! ! !'));
	this.emit('end');
}

// ##################### Development Tasks #####################
gulp.task('dev', ['dev_compile', 'dev_watch', 'dev_serve'])

gulp.task('dev_compile', ['dev_cp_js', 'dev_cp_scss', 'dev_cp_pug', 'compress_images', 'move_fonts'])

gulp.task('dev_serve', function(){
	bS.init({
		server: {
			baseDir: "./yoga-brasilia/www",
			middleware: spa({
				index: './index.html'
			})
		}
	});
})

gulp.task('dev_watch', function(){
	gulp.watch(['src/**/*.js'], ['dev_cp_js'])
	gulp.watch(['src/**/*.scss'], ['dev_cp_scss'])
	gulp.watch(['src/**/*.pug'], ['dev_cp_pug'])
})

gulp.task('dev_cp_js', function(){
	return gulp.src(scriptSrc)
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(concat('app.js'))
	.pipe(gulp.dest(dist + 'js'))
	.pipe(bS.stream())
})

gulp.task('dev_cp_scss', function(){
	return gulp.src(['src/assets/stylesheets/default.scss', 'src/components/**/*.scss', 'src/views/**/*.scss'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(concat('style.css'))
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest(dist + 'css'))
	.pipe(bS.stream())
})

gulp.task('dev_cp_pug', function(done){
	gulp.src(['src/index.pug'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(pug())
	.pipe(gulp.dest(dist))
	.pipe(bS.stream())

	gulp.src(['src/views/**/*.pug'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(pug())
	.pipe(flatten())
	.pipe(gulp.dest(dist + 'views'))
	.pipe(bS.stream())

	done();
})

// ##################### Build Tasks #####################

gulp.task('build', ['build_js', 'build_scss', 'build_pug', 'compress_images', 'move_fonts'])


gulp.task('build_js', function(){
	return gulp.src(['src/assets/vendor/**/*.min.js', 'src/app.module.js', 'src/**/*.controller.js', 'src/app.state.js', 'src/**/*.state.js'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest(dist + 'js'))
})

gulp.task('build_scss', function(){
	return gulp.src(['src/assets/stylesheets/default.scss', 'src/components/**/*.scss', 'src/views/**/*.scss'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(concat('style.css'))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(dist + 'css'))
})

gulp.task('build_pug', function(done){
	gulp.src(['src/index.pug'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(pug())
	.pipe(gulp.dest(dist))

	gulp.src(['src/views/**/*.pug'])
	.pipe(plumber({errorHandler: errHandler}))
	.pipe(pug())
	.pipe(gulp.dest(dist + 'views'))

	done();
})

// ##################### Generic Tasks #####################

gulp.task('move_fonts', function(){
	var a = setInterval(function(){
		gulp.src(['src/**/*.otf', 'src/**/*.woff', 'src/**/*.woff2', 'src/**/*.ttf', 'src/**/*.svg', 'src/**/*.eot'])
		.pipe(plumber({errorHandler: errHandler}))
		.pipe(flatten())
		.pipe(gulp.dest(dist + 'fonts'));
	}, 30 * 1000)
})

gulp.task('compress_images', function(){
	var a = setInterval(function(){
		gulp.src(['src/**/*.png', 'src/**/*.gif', 'src/**/*.jpg'])
		.pipe(plumber({errorHandler: errHandler}))
		.pipe(flatten())
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/images'));
	}, 60 * 1000)
})