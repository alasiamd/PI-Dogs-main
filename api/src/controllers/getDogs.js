const axios = require("axios");
require("dotenv").config();

const { API_KEY, ENDPOINT } = process.env;
const getDogs = async (req, res) => {
  try {
    const { data } = await axios.get(`${ENDPOINT}`);
    const dogs = data.map((element) => {
      return {
        id: element.id,
        image: element.image.url,
        name: element.name,
        temperament: element.temperament,
        weight: element.weight.metric,
        height: element.height.metric,
      };
    });
    res.status(200).json(dogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = getDogs;
