const { Temperament } = require('../db');

const handlerGetTemperaments = async (temperament) => {
    const newTemperament = await Temperament.findOrCreate({
        where:{
            name: temperament
        }
    })
}

module.exports = handlerGetTemperaments;