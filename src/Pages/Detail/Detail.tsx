import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { IMovieData, IMoviesData } from "../../type/type";

type ParamType = {
  id?: string | undefined;
};

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

function Detail() {
  const { id } = useParams<ParamType>();
  const { loading, error, data } = useQuery<IMovieData>(GET_MOVIE, {
    variables: { id: Number(id) },
  });
  if (error) return <p>Error</p>;

  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : `${data?.movie?.title}`}</Title>
        {/* <Subtitle>
          {data?.movie?.language} · {data?.movie?.rating}
        </Subtitle> */}
        <Description>{data?.movie?.description_intro}</Description>
        {data?.suggestions.map((list) => {
          return (
            <Link to={`/${list.id}`}>
              <SubPoster src={list.medium_cover_image}></SubPoster>;
            </Link>
          );
        })}
      </Column>

      <Poster src={data?.movie?.medium_cover_image} />
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #3a37eb, #000);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  line-height: 2rem;
`;

const Poster = styled.img`
  height: 50%;
`;

const SubPoster = styled.img`
  width: 10%;
  padding-top: 10%;
  padding-left: 1.5rem;
`;
