import { characters } from "../db";
import styled from "styled-components";
import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <StyledMain>
      {page > 0 && (
        <StyledPrevButton
          type="button"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <Card character={characters[page - 1]} />
        </StyledPrevButton>
      )}
      <Card character={characters[page]} />
      {page < characters.length - 1 && (
        <StyledNextButton
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <Card character={characters[page + 1]} />
        </StyledNextButton>
      )}
    </StyledMain>
  );
}

const StyledPrevButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  left: 0;
  transform: scale(0.9) translateX(-60%);
  @media screen and (min-width: 760px) {
    transform: scale(0.6);
  }
`;

const StyledNextButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 0;
  transform: scale(0.9) translateX(60%);
  @media screen and (min-width: 760px) {
    transform: scale(0.6);
  }
`;

const StyledMain = styled.main`
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  background-color: white;
  position: relative;
  padding: 5em;
  max-width: 960px;
  @media screen and (min-width: 760px) {
    padding: 8em;
  }
`;
