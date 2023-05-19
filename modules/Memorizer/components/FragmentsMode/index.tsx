import React from "react";
import { Button } from "antd";
import { Verse } from "../Verse";
import { Hidden, Word, Container } from "./style";
import { Input } from "./components/Input";
import { RetweetOutlined } from "@ant-design/icons";
import { hideRandomFragments } from "./blocs/hideRandomFragments";
import { removeKeywordTag } from "../../helpers/removeKeywordTag";

type Props = {
  resetComponent: () => void;
  mode: Memorizer.Mode;
  verses: Memorizer.Verses;
};

export const FragmentsMode: React.FC<Props> = ({
  resetComponent,
  verses,
  mode,
}) => {
  const renderWordsForWriteMode = (processedWords: any) => {
    return processedWords.map(({ word, isHidden }: any) => {
      if (isHidden) return <Input key={Math.random()} word={word} />;
      return <Word key={Math.random()}>{word}</Word>;
    });
  };

  const renderWordsForDefaultMode = (processedWords: any) => {
    return processedWords.map(({ word, isHidden }: any) => {
      if (isHidden) return <Hidden key={Math.random()}>{word}</Hidden>;
      return <Word key={Math.random()}>{word}</Word>;
    });
  };

  const renderProcessedWords = (processedWords: any) => {
    if (mode === "write") return renderWordsForWriteMode(processedWords);
    return renderWordsForDefaultMode(processedWords);
  };

  const renderVerses = () => {
    const cleanVerses = removeKeywordTag(verses);

    return cleanVerses.map((verse) => {
      const processedWords = hideRandomFragments(verse.text);

      return (
        <Verse key={Math.random()}>
          {verse.number}. {renderProcessedWords(processedWords)}
        </Verse>
      );
    });
  };

  return (
    <Container>
      <div style={{ marginLeft: "auto" }}>
        <Button style={{ marginBottom: "1rem" }} onClick={resetComponent}>
          <RetweetOutlined style={{ marginTop: "3px" }} />
          Embaralhar novamente
        </Button>
      </div>

      {renderVerses()}
    </Container>
  );
};
