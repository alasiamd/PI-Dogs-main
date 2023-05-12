const { Dog } = require('../db');
const handlerGetDog = async (req, res) => {
    const data = await Dog.findAll()
}