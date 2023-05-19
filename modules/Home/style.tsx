import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  max-width: 650px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: row;
  margin-bottom: 2rem;
  border-radius: 1rem;
  font-family: Poppins;
  align-items: flex-end;

  color: white;
  background: #333;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  font-family: Poppins;
  align-items: flex-end;
`;
