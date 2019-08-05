let gulp = require('gulp');//
// let concat = require('gulp-concat');
// let uglify = require('gulp-uglify');
// let rename = require('gulp-rename');
//  let mincss = require('gulp-minify-css');
// let minimg = require('gulp-imagemin');
// gulp.task("copyhtml",async ()=>{
// 	gulp.src('index.html')
// 	.pipe(gulp.dest('D:\\phpStudy\\WWW\\aihao'));
// });
gulp.task("copyall",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower"));

	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\js"));

	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\css"));

	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\img"));

	gulp.src("icon/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\icon"));

	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\font"));

	gulp.src("/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower"));

	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower"));
});

gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower"));
	})
	gulp.watch("css/*.css",async ()=>{
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\css"));
	})
	gulp.watch("js/*.js",async ()=>{
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\js"));
	})
	gulp.watch("img/**/*",async ()=>{
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\img"));
	})
	gulp.watch("*.php",async ()=>{
	gulp.src("*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower"));
	})
	// gulp.watch("dami/sass/**/*",async ()=>{
	// 	gulp.src("sass/**/*")
	// 	.pipe(sass())
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\flower\\css"));
	// })
})
