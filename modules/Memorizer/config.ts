import { FirstCharMode } from "./components/FirstCharMode";
import { FragmentsMode } from "./components/FragmentsMode";
import { KeywordMode } from "./components/KeywordMode";
import { SimpleMode } from "./components/SimpleMode";

const Definitions: Record<Memorizer.Mode, Memorizer.ModeDefinition> = {
  "first-char": {
    label: "Primeira letra",
    component: FirstCharMode,
  },
  fragments: {
    label: "Fragmentos",
    component: FragmentsMode,
  },
  keyword: {
    label: "Palavras-chave",
    component: KeywordMode,
  },
  simple: {
    label: "Simples",
    component: SimpleMode,
  },
  write: {
    label: "Escrita",
    component: FragmentsMode,
  },
};

export default Definitions;
