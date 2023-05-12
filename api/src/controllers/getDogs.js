const axios = require("axios");
require("dotenv").config();
const { Dog } = require("../db");

const { API_KEY, ENDPOINT } = process.env;
const getDogs = async (req, res) => {
  const { search } = req.query;
  console.log(search);
      try {
          if (search) {
          const { data } = await axios.get(`${ENDPOINT}/search?q=${search}&api_key=${API_KEY}`)
              const infoApi = data.map(element => {
                  return {
                      id: element.id,
                      image: element.reference_image_id,
                      name: element.name,
                      temperament: element.temperament,
                      weight: element.weight.metric,
                      height: element.height.metric,
                      life_span: element.life_span,
                  }
              });

          res.status(200).json(infoApi)

      } else {
          const { data } = await axios.get(`${ENDPOINT}`)
          const infoApi = data.map(element => {
              return {
                  id: element.id,
                  image: element.image.url,
                  name: element.name,
                  temperament: element.temperament,
                  weight: element.weight.metric,
                  height: element.height.metric,
                  life_span: element.life_span,
              }
          });

          res.status(200).json(infoApi)

      }

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = getDogs;
