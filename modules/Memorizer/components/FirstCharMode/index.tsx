import React from "react";
import { Button } from "antd";
import { Verse } from "../Verse";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { removeKeywordTag } from "../../helpers/removeKeywordTag";
import { Container, Hidden, VisibleChar, Word } from "./style";
type Props = { verses: Memorizer.Verses };

export const FirstCharMode: React.FC<Props> = ({ verses }) => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  const toggleReveal = () => setIsRevealed(!isRevealed);

  const maskWord = (word: string) => {
    const chars = word.split("");

    const maskedChars = chars.map((char, index) => {
      if (index === 0) {
        return <VisibleChar key={Math.random()}>{char}</VisibleChar>;
      }

      if (chars[index - 1] === "-") {
        return (
          <VisibleChar key={Math.random()} spaced={true}>
            {char}
          </VisibleChar>
        );
      }

      return (
        <Hidden key={Math.random()} isRevealed={isRevealed}>
          {char}
        </Hidden>
      );
    });

    return <Word key={Math.random()}>{maskedChars}</Word>;
  };

  const giveClues = (verse: string) => {
    const words = verse.split(" ");
    return words.map(maskWord);
  };

  const renderVerses = () => {
    const cleanVerses = removeKeywordTag(verses);

    return cleanVerses.map((verse) => (
      <Verse key={Math.random()}>
        {verse.number}. {giveClues(verse.text)}
      </Verse>
    ));
  };

  return (
    <Container>
      <div style={{ marginLeft: "auto" }}>
        <Button style={{ marginBottom: "1rem" }} onClick={toggleReveal}>
          <EyeInvisibleOutlined style={{ marginTop: "3px" }} />
          Revelar palavras
        </Button>
      </div>

      {renderVerses()}
    </Container>
  );
};
