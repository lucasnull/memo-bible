import styled, { css } from "styled-components";

function calculateInputWidth(charNumber: number) {
  const charNumberMap = {
    1: 2.8,
    2: 4.1,
    3: 5.1,
    4: 6.1,
    5: 7.3,
    6: 8.3,
    7: 9.3,
    8: 10.5,
    9: 11.5,
    10: 12.6,
    11: 13.6,
    12: 14.8,
    13: 15.8,
    14: 17,
    15: 18,
    16: 19.2,
    17: 20.2,
    18: 21.3,
    19: 22.3,
    20: 23.5,
  } as any;

  return charNumberMap[charNumber];
}

export const Container = styled.div<any>`
  margin-right: 0.84rem;
  display: inline-flex;
  width: ${(p) => calculateInputWidth(p.size)}rem;
`;

export const TextInput = styled.input<any>`
  width: 100%;
  text-align: center;
  line-height: normal;
  border-radius: 50rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid #ddd;

  ${(p) =>
    p.status === "success" &&
    css`
      border-color: green;
      background: #e8ffee;
      color: green;
    `}

  ${(p) =>
    p.status === "error" &&
    css`
      border-color: red;
      background: #ffe8e8;
      color: red;
    `}
`;
