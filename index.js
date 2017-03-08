const flatArray = (inputArr) =>
  inputArr.reduce((outputArr, el) =>
    outputArr.concat(Array.isArray(el) ? flatArray(el) : el), []
  );

module.exports = (array) => flatArray(array);


