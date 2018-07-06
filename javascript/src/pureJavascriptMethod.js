
function pureJavascriptMethod (n) {
  if (n < 1) throw Error('n must be greater than 1')
  let outputSequence = '1'
  while (n-- > 1) {
    outputSequence = lookNSay(outputSequence)
  }
  return outputSequence
}

function lookNSay (inputSequence) {
  const inputSequenceArray = inputSequence.split('')

  let current
  let count = 0
  let look = []
  inputSequenceArray.forEach((elem) => {
    if (current == null) current = elem
    if (current === elem) {
      count++
      return
    }
    look.push({ number: current, count })
    // reset
    current = elem
    count = 1
  })
  look.push({ number: current, count })

  const say = (accumulator, numberToSay) => `${accumulator}${numberToSay.number}${numberToSay.count}`
  return look.reduce(say, '')
}

export {
  pureJavascriptMethod
}
