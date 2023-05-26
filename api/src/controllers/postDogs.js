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

    req.responseData = data; // Guardar los datos en la solicitud para usarlos en el siguiente middleware
    next();
  } catch (error) {
    next(error); // Pasar el error al siguiente middleware de manejo de errores
  }
};

module.exports = postDogs;
