const axios = require("axios");
require('dotenv').config();

const {API_KEY, ENDPOINT} = process.env;
const getDogById = async (req, res) => {    
    try {
        const {idRaza} = req.params;
        const {data} = await axios.get(`${ENDPOINT}/${idRaza}`);
        console.log(data)
        const {
            id , 
            reference_image_id, 
            name, 
            temperament, 
            weight: {metric: weight},
            height: {metric: height}, 
            life_span
        } = data               
        res.status(200).json({
            id, 
            reference_image_id, 
            name, 
            weight, 
            height,
            temperament, 
            life_span
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });                
    }
};

module.exports = getDogById;