# gulp-css2txt

[![Build Status](https://travis-ci.org/KamataRyo/gulp-css2txt.svg?branch=master)](https://travis-ci.org/KamataRyo/gulp-css2txt)

gulp-css2txt is a gulp plugin to extract possible characters from css which may be appear in browser.

## install

```
$ npm install -D gulp-css2txt
```

## usage

### Static import

```
import gulp from 'gulp'
import css2txt from 'gulp-css2txt'

gulp.task('css2txt', () => {
  gulp.src(['path/to/the.css'])
    .pipe(css2txt())
    .pipe(gulp.dest('dist/'))
})
```

### CommonJS style

```
const gulp = require('gulp')
const css2txt = require('gulp-css2txt')

gulp.task('css2txt', () => {
  gulp.src(['path/to/the.css'])
    .pipe(css2txt({ opts }))
    .pipe(gulp.dest('dist/'))
})
```

## I/O

### input

CSS is acceptable.

```css
.foo::before {
  content: 'abc'
}
.bar::before {
  content: 'def'
}
.baz::after {
  content: "\47"; // G
}
```

### output

*style.txt*
```
abcdefG
```
