import expect from 'expect'
import { normalize } from '../src/lib.js'

describe.only('test of option normalization', () => {

  it('should return default props', () => {
    expect(normalize()).toEqual({ content: true })
  })

  it('should eliminate unnecessary params', () => {
    expect(normalize({ some: true, content: true })).toEqual({ content: true })
  })

  it('should return content prop if not given', () => {
    expect(normalize({ some: false })).toEqual({ some: false, content: true })
  })

  it('should convert array to object', () => {
    expect(normalize(['list-style', 'content'])).toEqual({ 'list-style': true, content: true })
  })
})
