import Definitions from "../config";

export function getModeLabel(mode: Memorizer.Mode) {
  return Definitions[mode].label;
}
