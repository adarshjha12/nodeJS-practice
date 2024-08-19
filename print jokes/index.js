
const jokesLib = require('./lib/jokes')
const mathLib = require('./lib/math')

const app = {}

app.config = {
    timeBetweenJokes: 1000
}

app.printAJoke = function () {
    let allJokes = jokesLib.allJokes()

    let numberOfJokes = allJokes.length

    let randomNumber = mathLib.generateRandomNum(1, numberOfJokes)

    let selectedJokes = allJokes[randomNumber - 1]
    console.log(selectedJokes);
    

}

app.indefiniteLoop = function () {
    setInterval(app.printAJoke, app.config.timeBetweenJokes)
}

app.indefiniteLoop()