
const inputCodeExample = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
]

function secund(input) {
    const numbers = { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9' };
    const result = input.reduce((acc, act) => {
        let [init, last] = Array(2).fill('')
        const sumLength = act.length
        for (let key = 0; key < sumLength; key++) {

            if (init && last) {
                break;
            }
            if (!init) {
                if (Number(act[key])) {
                    init = act[key]
                } else if (numbers[act.substring(key, key + 3)]) {
                    init = numbers[act.substring(key, key + 3)]
                } else if (numbers[act.substring(key, key + 4)]) {
                    init = numbers[act.substring(key, key + 4)]
                } else if (numbers[act.substring(key, key + 5)]) {
                    init = numbers[act.substring(key, key + 5)]
                } else if (numbers[act.substring(key, key + 6)]) {
                    init = numbers[act.substring(key, key + 6)]
                }
            }

            if (!last) {
                if (Number(act[sumLength - 1 - key])) {
                    last = act[sumLength - 1 - key]
                } else if (numbers[act.substring(sumLength - 3 - key, sumLength - key)]) {
                    last = numbers[act.substring(sumLength - 3 - key, sumLength - key)]
                } else if (numbers[act.substring(sumLength - 4 - key, sumLength - key)]) {
                    last = numbers[act.substring(sumLength - 4 - key, sumLength - key)]
                } else if (numbers[act.substring(sumLength - 5 - key, sumLength - key)]) {
                    last = numbers[act.substring(sumLength - 5 - key, sumLength - key)]
                } else if (numbers[act.substring(sumLength - 6 - key, sumLength - key)]) {
                    last = numbers[act.substring(sumLength - 6 - key, sumLength - key)]
                }
            }

        }

        return acc + Number(init + last)
    }, 0)

    return result
}

module.exports = { secund }