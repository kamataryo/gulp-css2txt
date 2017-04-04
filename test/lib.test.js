import expect from 'expect'
import { regulate } from '../src/lib.js'

describe('test of option regularization', () => {

  it.only('should eliminate unnecessary params', () => {
    expect(regulate({ some: true, content: true })).toEqual({ content: true })
  })
})
