
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

  let numberLookingAt
  let count = 0
  let look = []
  inputSequenceArray.forEach((numberFromSequence) => {
    if (numberLookingAt == null) numberLookingAt = numberFromSequence
    if (numberLookingAt === numberFromSequence) {
      count++
      return
    }
    look.push({ number: numberLookingAt, count })
    // reset
    numberLookingAt = numberFromSequence
    count = 1
  })
  look.push({ number: numberLookingAt, count })

  const say = (accumulator, numberToSay) => `${accumulator}${numberToSay.number}${numberToSay.count}`
  return look.reduce(say, '')
}

export {
  pureJavascriptMethod
}
