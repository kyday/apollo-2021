import React from "react";
import styled from "styled-components";
import Movie from "../../components/Movie";
import { useQuery, gql } from "@apollo/client";

import { IMovie, IMoviesData } from "../../type/type";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery<IMoviesData>(GET_MOVIES);

  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Header>
        <Title>Apollo Movie App 2021</Title>
        <Subtitle>GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((list: IMovie) => {
          return (
            <Movie key={list.id} id={list.id} bg={list.medium_cover_image} />
          );
        })}
      </Movies>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #3a37eb, #000);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
