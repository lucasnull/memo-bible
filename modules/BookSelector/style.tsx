import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  flex-direction: row;
  align-items: flex-end;

  background: #333;
  color: white;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 1.4rem;
  flex-direction: row;
  border-radius: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  font-family: Poppins;
  cursor: pointer;
  justify-content: center;

  background: #333;
  color: white;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  flex-direction: column;
`;
