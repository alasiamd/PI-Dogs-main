const {Dog} = require('../db');

const handlerPostDogs = async (name, image, height, weight, life_span, temperament) => {
    const newDog = await Dog.create({
        name,
        image,
        height,
        weight,
        life_span,
    }); 

    return newDog;
}

module.exports = handlerPostDogs;