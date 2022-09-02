
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gi;

const filterPunctuation = (string) => {
  return string.replace(regex, ' ').trim();
}

module.exports = filterPunctuation



