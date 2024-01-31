import styled from "styled-components";

export default function Card({ character }) {
  return (
    <StyledArticle>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </StyledArticle>
  );
}
const StyledArticle = styled.article`
  min-height: 500px;
  width: 100%;
  padding: 1em;
  background-color: #eee;
  border-radius: 1em;
  h2 {
    text-align: center;
  }
`;
