import Definitions from "../config";

export function getModeComponent(mode: Memorizer.Mode) {
  return Definitions[mode].component;
}
