const data = require('./data')

const getRandomName = () => `${random(data.adjectives).toLowerCase()}-${random(data.persons).toLowerCase()}`

const random = (array) => array[Math.floor(Math.random() * array.length)]

exports.getRandomName = getRandomName;