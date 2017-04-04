import css        from 'css'
import gutil      from 'gulp-util'
import replaceExt from 'replace-ext'
import through    from 'through2'

import config from './config'
import { regulate } from './lib'
/**
 * plugin name
 * @type {String}
 */
const PLUGIN_NAME = 'gulp-css2txt'

/**
 * extract text contents from css
 * @param  {Object} opts  option values
 * @return {Through} Gulp Plugin function
 */
const css2txt = function(opts) {

  // regularize options
  const options = regulate(opts)

  /**
   * Transform
   * @param  {Vinyl}    file     File object typed Vinyl
   * @param  {string}   encode   character encoding
   * @param  {Function} callback called at the end of transform
   * @return {void}
   */
  function transform(file, encode, callback) {

    // null input
    if (file.isNull()) {
    // nothing to do
      return callback(null, file)
    }

    // buffer mode
    if (file.isBuffer()) {
      const result = file.clone()

      try {

        const declatrations = css.parse(result.contents.toString()).stylesheet.rules
          .map(x => x.declarations)
          .reduce((prev, declarations) => prev.concat(declarations), []) // flatten
          .map(declaration => {
            const { property, value } = declaration

          })


        result.contents = new Buffer(
          css.parse(result.contents.toString()).stylesheet.rules
            .map(x => x.declarations)
            .reduce((prev, declarations) => prev.concat(declarations), []) // flatten
            .filter(x => x &&
                         x.property === 'content' &&
                         typeof x.value === 'string' &&
                         x.value.length > 0 &&
                         (
                           (x.value[0] === '\'' && x.value[x.value.length - 1] === '\'') ||
                           (x.value[0] === '"'  && x.value[x.value.length - 1] === '"' )
                         )
                    ) // pick { content: <string> } up
            .map(x => x.value)
            .map(x => x.split('').splice(1, x.length - 2).join('')) // unwrap quotes
            .map(x => x[0] === '\\' ?
                        String.fromCharCode(
                         parseInt('0x' + x.split('').splice(1, x.length - 1).join(''))
                       ) : x
                ) // decode '\fff' as '0xfff'
            .join('')
        )
      } catch (err) {
        this.emit('error', new gutil.PluginError(PLUGIN_NAME, err))
        return
      }

      result.path = replaceExt(file.path, '.txt')
      this.push(result)
      return callback()
    }

    // stream mode
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streams not supported!'))
      return
    }
  }

  /**
   * Flush
   * @param  {Function} callback called at end of flush
   * @return {void}
   */
  function flush(callback) {
    return callback()
  }

  return through.obj(transform, flush)
}

export default css2txt

if (module) {
  module.exports = css2txt
}
