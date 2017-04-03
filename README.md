# gulp-css2txt

[![Build Status](https://travis-ci.org/KamataRyo/gulp-css2txt.svg?branch=master)](https://travis-ci.org/KamataRyo/gulp-css2txt)

[![npm version](https://badge.fury.io/js/gulp-css2txt.svg)](https://badge.fury.io/js/gulp-css2txt)


gulp-css2txt is a gulp plugin to extract possible characters from css which may be appear in browser.

## install

```shell
$ npm install -D gulp-css2txt
```

## Simple usage

### Static import

```javascript
import gulp from 'gulp'
import css2txt from 'gulp-css2txt'

gulp.task('css2txt', () => {
  gulp.src(['path/to/the.css'])
    .pipe(css2txt())
    .pipe(gulp.dest('dist/'))
})
```

### CommonJS style

```javascript
const gulp = require('gulp')
const css2txt = require('gulp-css2txt')

gulp.task('css2txt', () => {
  gulp.src(['path/to/the.css'])
    .pipe(css2txt({ opts }))
    .pipe(gulp.dest('dist/'))
})
```

## Overview of transformation

### input

CSS is acceptable input.

```css
.foo::before {
  content: 'abc'
}
.bar::before {
  content: "def"
}
.baz::after {
  content: '\47'; /* G */
}
```

### output

Output willbe aggregated characters.

```text
abcdefG
```

## Example stack of font subsetting with `gulp-fontmin`

### prepare

```shell
$ npm install -D gulp gulp-css2txt gulp-fontmin
$ npm install -S font-awesome
```

```javascript
import gulp    from 'gulp'
import css2txt from 'gulp-css2txt'
import fontmin from 'gulp-fontmin'

gulp.task('font', cb => {

  const texts = []

  gulp.src(['./dist/*.css'])
    .pipe(css2txt())
    .on('data', file => texts.push(file.contents.toString()))
    .on('end', () => {

      const text = texts.join('')
      const formats = ['eot', 'ttf', 'woff', 'svg']

      gulp.src('./node_modules/font-awesome/fonts/**/*.ttf')
        .pipe(fontmin({ text, formats }))
        .pipe(gulp.dest('./dist'))
        .on('end', () => cb())
    })
```
