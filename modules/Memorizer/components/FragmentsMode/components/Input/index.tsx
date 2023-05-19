import _ from "lodash";
import React from "react";
import { Container, TextInput } from "./style";
import { checkIfMatch } from "../../helpers/checkIfMatch";
import { cleanWord } from "../../helpers/cleanWord";
type Props = { word: string };

export const Input: React.FC<Props> = ({ word }) => {
  const [status, setStatus] = React.useState("");

  const validateTyping = (e: any) => {
    const value = e.target.value;

    if (value === "") {
      return;
    }

    const matchWord = checkIfMatch(value, word);
    const status = matchWord ? "success" : "error";
    setStatus(status);
  };

  const debouncedValidateTyping = _.debounce(validateTyping, 3000);

  const onChange = (e: any) => {
    setStatus("");
    debouncedValidateTyping.cancel();
    return debouncedValidateTyping(e);
  };

  const onBlur = (e: any) => {
    debouncedValidateTyping.cancel();
    return validateTyping(e);
  };

  const onKeyDown = (e: any) => {
    if (e.which !== 13) {
      return;
    }

    const value = e.target.value;
    const cleanedWord = cleanWord(word);
    const minLenght = Math.min(word.length, cleanedWord.length);

    // run validations
    debouncedValidateTyping.cancel();
    validateTyping(e);

    if (value.length >= minLenght) {
      e.preventDefault();
      const element = e.target;
      const inputs = document.getElementsByClassName("user-input");

      for (let i = 0; i < inputs.length; i++) {
        const currentInput = inputs[i];
        const isActive = element.isEqualNode(currentInput);

        if (isActive) {
          const nextInput = inputs[i + 1] as any;
          if (!nextInput) break;

          nextInput.focus();
          break;
        }
      }
    }
  };

  return (
    <Container size={word.length}>
      <TextInput
        status={status}
        onBlur={onBlur}
        id={Math.random()}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="user-input"
        maxLength={word.length}
      />
    </Container>
  );
};
