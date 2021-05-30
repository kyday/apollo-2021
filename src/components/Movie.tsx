import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  id: number;
  bg: string;
};

function Movie({ id, bg }: Props) {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster src={bg} />
      </Link>
    </Container>
  );
}

export default Movie;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 7px;
`;
