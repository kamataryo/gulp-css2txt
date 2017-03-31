import assert  from 'stream-assert'
import gulp    from 'gulp'
import expect  from 'expect'
import css2txt from '../src/gulp-css2txt'

describe('gulp-fontcss2txt', () => {

  describe('null mode', () => {
    it('should work with null file', done => {
      gulp.src('path/not/matching')
        .pipe(css2txt())
        .pipe(assert.length(0))
        .pipe(assert.end(done))
    })
  })

  describe('Buffer mode', () => {
    it('should extract possible texts in css', done => {
      gulp.src([__dirname + '/fixtures/test1.css'])
        .pipe(css2txt())
        .pipe(assert.length(1))
        .pipe(assert.first(file => expect(file.path).toBe(__dirname + '/fixtures/test1.txt')))
        .pipe(assert.first(file => expect(file.contents.toString()).toContain('abc')))
        .pipe(assert.end(done))
    })

    it('should raise error with invalid css.', done => {
      gulp.src([__dirname + '/fixtures/test2.css'])
        .pipe(css2txt())
        .on('error', () => done())
    })
  })
})
