const { Dog, Temperament } = require("../db");

const handlerDBId = async (id) => {
    const data = await Dog.findAll({
        where: { id },
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }   
    })    
    return data;     
}

module.exports = handlerDBId;