const axios = require("axios");
require("dotenv").config();
const { handlerDBId } = require("../handlers/index");

const { API_KEY, ENDPOINT } = process.env;
const getDogById = async (req, res) => {
  try {
    const { idRaza } = req.params;
    const { data } = await axios.get(`${ENDPOINT}`);
    let finded = data.find((element) => element.id == idRaza);

    if (finded === undefined) {
      finded = await handlerDBId(idRaza);
      if (finded.length === 0) {
        return res.status(404).send({ message: "Perro no encontrado" });
      }
      console.log(finded);
      return res.status(200).json(finded);
    }
    const {
      id,
      reference_image_id,
      name,
      temperament,
      weight: { metric: weight },
      height: { metric: height },
      life_span,
    } = finded;
    res.status(200).json({
      id,
      reference_image_id,
      name,
      weight,
      height,
      temperament,
      life_span,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = getDogById;
