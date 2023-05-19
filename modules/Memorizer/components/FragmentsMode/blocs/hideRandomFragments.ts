import _ from "lodash";

const MIN_WORDS = 0;
const MAX_PERC = 0.5;

const getRandomNumberBetween = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from)) + from;
};

/**
 * This function reads a verse and hide some random words from it
 * considering a minimum and maximum number of words to do it.
 * @param {string} verse
 * @return {object}
 */
export const hideRandomFragments = (verse: string) => {
  // prepare some control variables
  const wordsList = verse.split(" ");
  const maxHideFactor = Math.floor((wordsList.length - 1) * MAX_PERC);
  const howManyWordsToHide = getRandomNumberBetween(MIN_WORDS, maxHideFactor);
  const wordsSize = wordsList.length - 1;
  const wordsToKeep = wordsSize - howManyWordsToHide;

  // pick random words considering the control variables
  // creates an array with the same size of words and fill it with a index number
  // then just shuffle it randomically and pick the firsts entries
  const indexes = Array(wordsSize).fill(null);
  const fullfiledIndexes = indexes.map((_, i) => i);
  const shuffledIndex = _.shuffle(fullfiledIndexes);
  const indexesToKeep = shuffledIndex.slice(0, wordsToKeep);

  // retrieve a random verse filtering the random indexes chosen to be viewed
  return wordsList.map((word, index) => {
    const isHidden = !indexesToKeep.includes(index);
    return { word, isHidden };
  });
};
