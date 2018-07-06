import test from 'ava'
import { pureJavascriptMethod } from './pureJavascriptMethod'

// 1 11 12 1121 122111 112213 12221131 1123123111 (from google)

test('starting sequence must be greater than 0', (t) => {
  t.throws(()=>{
    pureJavascriptMethod(0)
  })
  t.throws(()=>{
    pureJavascriptMethod(-1)
  })
})

test('test first 8 sequences', (t) => {
  t.is(pureJavascriptMethod(1), '1')
  t.is(pureJavascriptMethod(2), '11')
  t.is(pureJavascriptMethod(3), '12')
  t.is(pureJavascriptMethod(4), '1121')
  t.is(pureJavascriptMethod(5), '122111')
  t.is(pureJavascriptMethod(6), '112213')
  t.is(pureJavascriptMethod(7), '12221131')
  t.is(pureJavascriptMethod(8), '1123123111')
})
