const regexNumber = /^([0-9])*$/;
const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;

export const validate = (inputs) => {
  const errors = {};
  if (!inputs.name) {
    errors.name = "You must enter a name";
  }

  if (!regexURL.test(inputs.image)) {
    errors.image = "You must enter a URL";
  }

  if (!inputs.minHeight) {
    errors.minHeight = "You must enter a value";
  }
  if (Number(inputs.minHeight) < 10) {
    errors.minHeight = "It must be at least 10cm";
  }
  if (Number(inputs.minHeight) > 100) {
    errors.minHeight = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.minHeight)) {
    errors.minHeight = "You must enter a number";
  }

  if (Number(inputs.maxHeight) < 10) {
    errors.maxHeight = "It must be at least 10cm";
  }
  if (Number(inputs.maxHeight) > 100) {
    errors.maxHeight = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.maxHeight)) {
    errors.maxHeight = "You must enter a number";
  }

  if (Number(inputs.maxHeight) <= Number(inputs.minHeight)) {
    errors.minHeight = "The minimum height must be less than the maximum";
  }

  if (!inputs.minWeight) {
    errors.minWeight = "You must enter a value";
  }
  if (Number(inputs.minWeight) <= 0) {
    errors.minWeight = "It must be greater than 1 kg";
  }
  if (Number(inputs.minWeight) > 100) {
    errors.minWeight = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.minWeight)) {
    errors.minWeight = "You must enter a number";
  }

  if (Number(inputs.maxWeight) <= 0) {
    errors.maxWeight = "It must be greater than 1 kg";
  }
  if (Number(inputs.maxWeight) > 130) {
    errors.maxWeight = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.maxWeight)) {
    errors.maxWeight = "You must enter a number";
  }

  if (Number(inputs.maxWeight) <= Number(inputs.minWeight)) {
    errors.minWeight = "The minimum weight must be less than the maximum";
  }

  if (!inputs.minLife) {
    errors.minLife = "You must enter a value";
  }
  if (Number(inputs.minLife) < 5) {
    errors.minLife = "Must be 5 years or older";
  }
  if (Number(inputs.minLife) > 20) {
    errors.minLife = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.minLife)) {
    errors.minLife = "You must enter a number";
  }

  if (Number(inputs.maxLife) < 5) {
    errors.maxLife = "Must be 5 years or older";
  }
  if (Number(inputs.maxLife) > 20) {
    errors.maxLife = "Enter a smaller value";
  }
  if (!regexNumber.test(inputs.maxLife)) {
    errors.maxLife = "You must enter a number";
  }

  if (Number(inputs.maxLife) <= Number(inputs.minLife)) {
    errors.minLife = "The minimum expectation must be less than the maximum";
  }

  if (inputs.temperament.length === 0) {
    errors.temperament = "You must add at least one temperament";
  }
  return errors;
};
