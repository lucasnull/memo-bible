import React from "react";
import { Select, Button } from "antd";
import { ChangeModeContainer } from "../style";
import { SyncOutlined } from "@ant-design/icons";
import { Container, InputContainer, Title, TitleContainer } from "./style";

import {
  getBookChaptersList,
  getBookLabel,
  getBookList,
  getChapterVersesList,
} from "@/modules/Bible/helpers";

const BookSelector: React.FC<BookSelector.Props> = (props) => {
  const {
    book,
    chapter,
    verseFrom,
    verseTo,
    setBook,
    setChapter,
    setVerseRange,
  } = props;

  const [editMode, setEditMode] = React.useState(false);
  const [localBook, setLocalBook] = React.useState(book);
  const [localChapter, setLocalChapter] = React.useState(chapter);
  const [localVerseFrom, setLocalVerseFrom] = React.useState(verseFrom);
  const [localVerseTo, setLocalVerseTo] = React.useState(verseTo);

  const applyChanges = () => {
    setBook(localBook);
    setChapter(localChapter);
    setVerseRange(localVerseFrom, localVerseTo);
    setEditMode(false);
  };

  const renderTitle = () => {
    if (verseFrom === verseTo) {
      return (
        <React.Fragment>
          {getBookLabel(book)} {chapter}:{verseFrom}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {getBookLabel(book)} {chapter}:{verseFrom}-{verseTo}
      </React.Fragment>
    );
  };

  const renderBookList = () => {
    const books = getBookList();

    return books.map((book) => {
      return (
        <Select.Option key={book.key} value={book.key}>
          {book.label}
        </Select.Option>
      );
    });
  };

  const renderChapters = () => {
    const chapters = getBookChaptersList(localBook);

    return chapters.map((chapter) => {
      return (
        <Select.Option key={chapter} value={chapter}>
          {chapter}
        </Select.Option>
      );
    });
  };

  const renderVerses = (verses: number[]) => {
    return verses.map((verse) => {
      return (
        <Select.Option key={verse} value={verse}>
          {verse}
        </Select.Option>
      );
    });
  };

  const renderVersesFrom = () => {
    const verses = getChapterVersesList(localBook, localChapter);
    return renderVerses(verses);
  };

  const renderVersesTo = () => {
    const verses = getChapterVersesList(localBook, localChapter);
    const availableRange = verses.filter((verse) => verse >= localVerseFrom);
    return renderVerses(availableRange);
  };

  const filterSelect = (input: string, _option: any) => {
    const option = String(_option.children);
    return option.toLowerCase().includes(input.toLowerCase());
  };

  const handleBookChange = (value: any) => {
    setLocalBook(value);
    setLocalChapter(1);
    setLocalVerseFrom(1);
    setLocalVerseTo(1);
  };

  const handleChapterChange = (value: any) => {
    setLocalChapter(value);
    setLocalVerseFrom(1);
    setLocalVerseTo(1);
  };

  const handleVerseFromChange = (value: any) => {
    setLocalVerseFrom(value);

    if (value > localVerseTo) {
      setLocalVerseTo(value);
    }
  };

  if (!editMode) {
    return (
      <TitleContainer onClick={() => setEditMode(true)}>
        <div>
          Trecho selecionado:
          <Title>{renderTitle()}</Title>
        </div>

        <ChangeModeContainer>
          <SyncOutlined style={{ fontSize: "1.2rem", marginBottom: "7px" }} />
          Trocar trecho
        </ChangeModeContainer>
      </TitleContainer>
    );
  }

  return (
    <Container>
      <InputContainer style={{ gridArea: "1 / 1 / 2 / 5" }}>
        Livro
        <Select
          showSearch
          value={localBook}
          filterOption={filterSelect}
          onChange={handleBookChange}
        >
          {renderBookList()}
        </Select>
      </InputContainer>

      <InputContainer style={{ gridArea: "1 / 5 / 2 / 7" }}>
        {localBook === "psalms" ? "Número" : "Capítulo"}
        <Select
          showSearch
          value={localChapter}
          filterOption={filterSelect}
          onChange={handleChapterChange}
        >
          {renderChapters()}
        </Select>
      </InputContainer>

      <InputContainer style={{ gridArea: "2 / 1 / 3 / 3" }}>
        Verso inicial
        <Select
          showSearch
          value={localVerseFrom}
          filterOption={filterSelect}
          onChange={handleVerseFromChange}
        >
          {renderVersesFrom()}
        </Select>
      </InputContainer>

      <InputContainer style={{ gridArea: "2 / 3 / 3 / 5" }}>
        Verso final
        <Select
          showSearch
          value={localVerseTo}
          onChange={setLocalVerseTo}
          filterOption={filterSelect}
        >
          {renderVersesTo()}
        </Select>
      </InputContainer>

      <Button onClick={applyChanges} style={{ gridArea: "2 / 5 / 3 / 7" }}>
        Aplicar
      </Button>
    </Container>
  );
};

export default BookSelector;
