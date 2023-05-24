const regexNumber = /^([0-9])*$/;
const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;

export const validate = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Debe ingresar un valor";
  }

  if (!inputs.minHeight) {
    errors.minHeight = "Debe ingresar un valor";
  }
  if (Number(inputs.minHeight) <= 0) {
    errors.minHeight = "No debe ser menor que 1";
  }
  if (Number(inputs.minHeight) > 100) {
    errors.minHeight = "Ingrese un valor mas chico";
  }

  if (Number(inputs.maxHeight) <= 0) {
    errors.maxHeight = "No debe ser menor que 1";
  }
  if (Number(inputs.maxHeight) > 100) {
    errors.maxHeight = "Ingrese un valor mas chico";
  }

  if (!inputs.minWeight) {
    errors.minWeight = "Debe ingresar un valor";
  }
  if (Number(inputs.minWeight) <= 0) {
    errors.minWeight = "No debe ser menor que 1";
  }
  if (Number(inputs.minWeight) > 130) {
    errors.minWeight = "Ingrese un valor mas chico";
  }

  if (Number(inputs.maxWeight) <= 0) {
    errors.maxWeight = "No debe ser menor que 1";
  }
  if (Number(inputs.maxWeight) > 130) {
    errors.maxWeight = "Ingrese un valor mas chico";
  }

  if (!inputs.minLife) {
    errors.minLife = "Debe ingresar un valor";
  }
  if (Number(inputs.minLife) <= 0) {
    errors.minLife = "No debe ser menor que 1";
  }
  if (Number(inputs.minLife) > 130) {
    errors.minLife = "Ingrese un valor mas chico";
  }

  if (Number(inputs.maxLife) <= 0) {
    errors.maxLife = "No debe ser menor que 1";
  }
  if (Number(inputs.maxLife) > 130) {
    errors.maxLife = "Ingrese un valor mas chico";
  }

  if (inputs.temperament.length === 0) {
    errors.temperament = "Debe agregar al menos un temperamento";
  }
  return errors;
};
