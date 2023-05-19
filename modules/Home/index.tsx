import React from "react";
import Memorizer from "@/modules/Memorizer";
import { ChangeModeContainer } from "../style";
import { SyncOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Typography } from "antd";
import BookSelector from "@/modules/BookSelector";
import { getModeLabel } from "../Memorizer/helpers";
import { Header, Container, HeaderTitle, InnerContainer } from "./style";

const VIEW_MODES = [
  { name: "simple", label: "Simple" },
  { name: "write", label: "Write" },
  { name: "keyword", label: "Keyword" },
  { name: "fragments", label: "Fragmets" },
  { name: "first-char", label: "First Char" },
];

const Home = () => {
  const [mode, setMode] = React.useState<Memorizer.Mode>("keyword");
  const changeModeTo = (mode: Memorizer.Mode) => () => setMode(mode);

  const [book, setBook] = React.useState<Bible.Book>("psalms");
  const [chapter, setChapter] = React.useState<number>(1);
  const [verseFrom, setVerseFrom] = React.useState<number>(1);
  const [verseTo, setVerseTo] = React.useState<number>(6);

  const setVerseRange = (from: number, to: number) => {
    setVerseFrom(from);
    setVerseTo(to);
  };

  const renderMenu = () => {
    const items = VIEW_MODES.map((mode) => ({
      key: mode.name,
      label: getModeLabel(mode.name as Memorizer.Mode),
      onClick: changeModeTo(mode.name as Memorizer.Mode),
    }));

    return (
      <div style={{ marginTop: "10px" }}>
        <Menu items={items} />
      </div>
    );
  };

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Dropdown overlay={renderMenu()} trigger={["click"]}>
            <HeaderTitle>
              <div>
                Modo de treino:
                <Typography.Title
                  style={{
                    fontSize: "2.2rem",
                    color: "white",
                    marginBottom: 0,
                    lineHeight: 1,
                  }}
                >
                  {getModeLabel(mode)}
                </Typography.Title>
              </div>

              <ChangeModeContainer>
                <SyncOutlined
                  style={{ fontSize: "1.2rem", marginBottom: "7px" }}
                />
                Trocar modo
              </ChangeModeContainer>
            </HeaderTitle>
          </Dropdown>
        </Header>

        <BookSelector
          book={book}
          chapter={chapter}
          verseFrom={verseFrom}
          verseTo={verseTo}
          setBook={setBook}
          setChapter={setChapter}
          setVerseRange={setVerseRange}
        />

        <Memorizer
          mode={mode}
          book={book}
          chapter={chapter}
          verseFrom={verseFrom}
          verseTo={verseTo}
          version="ara"
          language="pt-BR"
        />
      </InnerContainer>
    </Container>
  );
};

export default Home;
