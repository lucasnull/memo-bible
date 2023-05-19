import { cleanWord } from "./cleanWord";
import similar from "string-similarity";

export const checkIfMatch = (typed: string, word: string) => {
  const clean = cleanWord(word);
  const { ratings } = similar.findBestMatch(typed, [word, clean]);
  const isSucceed = ratings.find(({ rating }) => rating >= 0.8);
  return Boolean(isSucceed);
};
