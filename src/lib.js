import config from './config'

const AVAIRABLE_OPTS = config.reduce((prev, def) => prev.concat(def.aliases), [])

/**
 * opts pramater regularization
 * @param  {Object|Array|string} opts un sanitized options
 * @return {Object}                   regular options
 */
export const normalize = opts => {

  if (!opts) {
    return { content: true }
  }

  if (Array.isArray(opts)) {
    return opts.reduce((prev, key) => {
      prev[key] = true
      return prev
    }, {})
  }

  const result = Object.keys(opts)
    .filter(key => AVAIRABLE_OPTS.includes(key))
    .reduce((prev, key) => {
      prev[key] = opts[key]
      return prev
    }, {})

  if (!result.hasOwnProperty('content')) {
    result.content = true
  }

  return result
}
