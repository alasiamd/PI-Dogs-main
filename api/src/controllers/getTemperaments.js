const axios = require('axios');
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;
const {handlerGetTemperaments} = require('../handlers/index');

const getTemperaments = async (req, res) => {
    try {
        const { data } = await axios.get(ENDPOINT)
        const info = data.map(element => {
            return {
                temperament: element.temperament,
            }
        })
        const temp = [];
        info.map(element => {
            if (element.temperament !== undefined) {
                const corte = element.temperament.toString();
                let prueba = corte.split(", ");
                return prueba.map(element => {
                    if (!temp.includes(element)) {
                        return temp.push(element);
                    }
                })
            }
        })
        for (let newTemp of temp) {
            await handlerGetTemperaments(newTemp);
        }

        // console.log("estas en tratamient", temp);

        res.status(200).json(temp);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getTemperaments;