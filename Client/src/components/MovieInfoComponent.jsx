import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const API_KEY = "3451fe25"

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;

const MovieInfoComponent = () => {

  const {id} = useParams();

  const [movieInfo, setMovieInfo] = useState();
  const  selectedMovie  = {id};
  
  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie.id}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));

  }, []);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfoComponent;