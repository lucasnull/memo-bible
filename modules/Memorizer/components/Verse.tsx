import styled from "styled-components";
type Props = { children: any; isAds?: boolean };

const VerseContainer = styled.div`
  padding: 2rem;
  display: block;
  font-size: 1.8rem;
  line-height: 4rem;
  font-family: DMMono;
  border-radius: 1.2rem;
  margin-bottom: 1.4rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const Verse: React.FC<Props> = (props) => {
  const cname = props.isAds ? undefined : "verse";
  return <VerseContainer className={cname}>{props.children}</VerseContainer>;
};
