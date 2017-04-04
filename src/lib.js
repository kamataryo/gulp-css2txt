import config from './config'

const AVAIRABLE_OPTS = config.reduce((prev, def) => prev.concat(def.aliases), [])

console.log('content' in AVAIRABLE_OPTS)

/**
 * opts pramater regularization
 * @param  {Object|Array|string} opts un sanitized options
 * @return {Object}                   regular options
 */
export const regulate = opts => Object.keys(opts)
  .filter(key => {
    console.log(key)
    return !(key in AVAIRABLE_OPTS) // ????よくわからない
  })
  .reduce((prev, key) => {
    console.log(key)
    prev[key] = opts[key]
    return prev
  }, {})
