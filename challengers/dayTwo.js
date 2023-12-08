
const inputCodeExample = {
    "Game 1": "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2": "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3": "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4": "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5": "6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
}

function first(input, validInputs = { red: 12, green: 13, blue: 14 }) {
    let acc = 0;

    for (const [key, value] of Object.entries(input)) {
        const arrayByAttempts = value.split(";")
        const limitedDraw = { red: 0, blue: 0, green: 0 }
        arrayByAttempts.forEach(element => {
            element.split(",").forEach(i => {
                const [unit, color] = i.trim().split(' ')
                limitedDraw[color] = Number(limitedDraw[color]) > Number(unit) ? Number(limitedDraw[color]) : Number(unit)
            });
        });
        if (limitedDraw.red <= validInputs.red && limitedDraw.green <= validInputs.green && limitedDraw.blue <= validInputs.blue) {
            const [_, value] = key.trim().split(' ')
            acc += Number(value)
        }

    }
    return acc
}
// const validInputs = { red: 12, green: 13, blue: 14 }
// console.log(first(inputCodeExample, validInputs));

function secund(input) {
    let acc = 0;

    for (const [_, value] of Object.entries(input)) {
        const arrayByAttempts = value.split(";")
        const limitedDraw = { red: 0, blue: 0, green: 0 }
        arrayByAttempts.forEach(element => {
            element.split(",").forEach(i => {
                const [unit, color] = i.trim().split(' ')
                limitedDraw[color] = Number(limitedDraw[color]) > Number(unit) ? Number(limitedDraw[color]) : Number(unit)
            });
        });
        const multiple = limitedDraw.red * limitedDraw.green * limitedDraw.blue
        acc += Number(multiple)
    }
    return acc
}

// console.log(secund(inputCodeExample, validInputs));

module.exports = { first, secund }