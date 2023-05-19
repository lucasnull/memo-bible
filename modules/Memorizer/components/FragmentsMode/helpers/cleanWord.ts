import _ from "lodash";

const IGNORED_CHAR_REGEX =
  /,|\.|;|\!|\||\?|:|>|<|\/|\\|\]|\[|\{|\}|=|\+|\)|\(|\*|\&|\%|\$|\#|\@/g;

export const cleanWord = (word: string) => {
  const lowercase = word.toLowerCase();
  const deburredWord = _.deburr(lowercase);
  const ignoredCharaters = deburredWord.replace(IGNORED_CHAR_REGEX, "");
  return ignoredCharaters.replace("-", " ");
};
