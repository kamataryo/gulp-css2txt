# gulp-css2txt

[![Build Status](https://travis-ci.org/KamataRyo/gulp-css2txt.svg?branch=master)](https://travis-ci.org/KamataRyo/gulp-css2txt)

gulp-css2txt is a gulp plugin to extract possible characters from css which may be appear in browser.

## install

```shell
$ npm install -D gulp-css2txt
```

## usage

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

## options and default

```javascript
{
  'content'   : true,  // pick content property
  'listStyle' : false  // pick list-style-type property
}
```

## Overview of transformation

### input

CSS is acceptable as input.

```css
.foo::before {
  content: 'abc'
}
.bar::before {
  content: 'def'
}
.baz::after {
  content: "\47"; /* G */
}
```

### output

Aggregated texts will be obtained.

```text
abcdefG
```
