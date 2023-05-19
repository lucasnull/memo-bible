import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Word = styled.span`
  align-items: center;
  display: inline-flex;
  margin-right: 0.84rem;
  justify-content: center;
`;

export const VisibleChar = styled.span<any>`
  margin-right: 0.4rem;
  margin-left: ${(p) => p.spaced && "0.84rem"};
`;

export const Hidden = styled.span<any>`
  height: 2.8rem;
  margin-right: 0;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background: ${(p) => (p.isRevealed ? "transparent" : "#333")};
`;
