const { Temperament } = require('../db');

const handlerGetTemperaments = async (temperament) => {
    const newTemperament = await Temperament.create({
        name: temperament
    })
}

module.exports = handlerGetTemperaments;