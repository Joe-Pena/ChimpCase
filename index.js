chimpCase = (
  str,
  options = {
    title: false,
    lowerCase: false,
    upperCase: false,
    case: "camelCase"
  }
) => {
  const firstLetter = str[0];
  const restOfWord = str.slice(1).toLowerCase();

  return firstLetter + restOfWord;
};

module.exports.chimpCase = chimpCase;
