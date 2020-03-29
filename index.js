chimpCase = (
  str,
  options = {
    format: "default",
    case: "camelCase",
    exception: null
  }
) => {
  if (!str || typeof str !== "string") {
    throw new TypeError(
      "Arguments passed to function chimpCase are invalid or empty."
    );
  }

  str.trim();
  const firstLetter = str[0].toUpperCase();
  let restOfString = str
    .substring(1)
    .replace(/([-|_])/g, " ")
    .toLowerCase();

  if (options.format === "title") {
    const wordList = restOfString.split(" ").map((word, index) => {
      const firstLetter = index !== 0 ? word[0].toUpperCase() : word[0];
      const restOfWord = word.substring(1);

      return firstLetter + restOfWord;
    });

    restOfString = wordList.join(" ");
  }

  return firstLetter + restOfString;
};

console.log(chimpCase("BEST-Type_of_word_the movie", { format: "title" }));
module.exports.chimpCase = chimpCase;
