const math = {}

 math.generateRandomNum = function (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}


module.exports = math