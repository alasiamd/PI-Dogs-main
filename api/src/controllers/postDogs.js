const { handlerPostDogs } = require("../handlers/index");

const postDogs = async (req, res, next) => {
  const { name, image, height, weight, life_span, temperament } = req.body;
  try {
    if (!name || !image || !height || !weight || !life_span || !temperament)
      res.status(401).json({ message: "faltan datos" });

    const data = await handlerPostDogs(
      name,
      image,
      height,
      weight,
      life_span,
      temperament
    );

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = postDogs;
