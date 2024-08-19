const fs = require('fs')

const file = fs.readFileSync(__dirname+'/jokes.txt', 'utf8')

const jokes = {}

jokes.allJokes = function () {
    const arrayOfJokes = file.split(/\r?\n/)
    return arrayOfJokes
}


module.exports = jokes
