
export default function radixSort(array: number[]): number[] {
  const maxDigits = array.reduce((curr, num) =>  curr = Math.max(curr, digitCount(num)), 0)

  for (let i = 0; i < maxDigits; i++) {
    const bucket = Array.from({length: 10}, () => []) as number[][]

    for (const number of array) {
      bucket[getDigit(number, i)].push(number)
    }

    array = bucket.flat()
  }

  return array
}

function getDigit(num: number, pos: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function digitCount(num: number){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
