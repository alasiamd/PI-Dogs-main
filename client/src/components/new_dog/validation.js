const regexNumber = /^([0-9])*$/;
const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;

export const validate = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Debe ingresar un nombre";
  }

  if (!regexURL.test(inputs.image)) {
    errors.image = "Debe ingresar una URL";
  }

  if (!inputs.minHeight) {
    errors.minHeight = "Debe ingresar un valor";
  }
  if (Number(inputs.minHeight) < 10) {
    errors.minHeight = "Debe ser de al menos 10cm";
  }
  if (Number(inputs.minHeight) > 100) {
    errors.minHeight = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.minHeight)) {
    errors.minHeight = "Debe ingresar un numero";
  }

  if (Number(inputs.maxHeight) < 10) {
    errors.maxHeight = "Debe ser de al menos 10cm";
  }
  if (Number(inputs.maxHeight) > 100) {
    errors.maxHeight = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.maxHeight)) {
    errors.maxHeight = "Debe ingresar un numero";
  }

  if (Number(inputs.maxHeight) <= Number(inputs.minHeight)) {
    errors.minHeight = "La altura minima debe ser menor que la maxima";
  }

  if (!inputs.minWeight) {
    errors.minWeight = "Debe ingresar un valor";
  }
  if (Number(inputs.minWeight) <= 0) {
    errors.minWeight = "Debe ser mayor que 1 Kg";
  }
  if (Number(inputs.minWeight) > 100) {
    errors.minWeight = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.minWeight)) {
    errors.minWeight = "Debe ingresar un numero";
  }

  if (Number(inputs.maxWeight) <= 0) {
    errors.maxWeight = "Debe ser mayor que 1 Kg";
  }
  if (Number(inputs.maxWeight) > 130) {
    errors.maxWeight = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.maxWeight)) {
    errors.maxWeight = "Debe ingresar un numero";
  }

  if (Number(inputs.maxWeight) <= Number(inputs.minWeight)) {
    errors.minWeight = "El peso minimo debe ser menor que el maximo";
  }

  if (!inputs.minLife) {
    errors.minLife = "Debe ingresar un valor";
  }
  if (Number(inputs.minLife) < 5) {
    errors.minLife = "Debe ser de 5 años o mas";
  }
  if (Number(inputs.minLife) > 20) {
    errors.minLife = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.minLife)) {
    errors.minLife = "Debe ingresar un numero";
  }

  if (Number(inputs.maxLife) < 5) {
    errors.maxLife = "Debe ser de 5 años o mas";
  }
  if (Number(inputs.maxLife) > 20) {
    errors.maxLife = "Ingrese un valor mas chico";
  }
  if (!regexNumber.test(inputs.maxLife)) {
    errors.maxLife = "Debe ingresar un numero";
  }

  if (Number(inputs.maxLife) <= Number(inputs.minLife)) {
    errors.minLife = "La esperanza minima debe ser menor que la maxima";
  }

  if (inputs.temperament.length === 0) {
    errors.temperament = "Debe agregar al menos un temperamento";
  }
  return errors;
};
