import { Col, Row } from "react-bootstrap";
import CardMovies from "../CardMovies/CardMovies";
import { Skeleton } from "@mui/material";
import styled from "styled-components";

const SkeletonMovie = styled(Skeleton)`
  border-radius: 15px;
  margin: 22px;
`;

const MovieList = (props) => {
  return (
    <>
      <Row>
        {props.loading
          ? [...Array(props.isLimit4 ? 4 : 20)].map((_, index) => (
              <Col lg={3} sm={6} key={index}>
                <SkeletonMovie
                  animation="wave"
                  variant="rect"
                  widht="100%"
                  height={300}
                />
              </Col>
            ))
          : props.isLimit4
          ? props.moviesList.slice(0, 4).map((movie) => (
              <Col lg={3} sm={6} key={movie.id}>
                <CardMovies
                  key={movie.id}
                  id={movie.id}
                  ImagePoster={movie.poster_path}
                  TitlePoster={movie.title ?? movie.name}
                  DatePoster={movie.release_date ?? movie.first_air_date}
                  isMovie={movie.release_date ? true : false}
                />
              </Col>
            ))
          : props.moviesList.map((movie) => (
              <Col lg={3} sm={6} key={movie.id}>
                <CardMovies
                  key={movie.id}
                  id={movie.id}
                  ImagePoster={movie.poster_path}
                  TitlePoster={movie.title ?? movie.name}
                  DatePoster={movie.release_date ?? movie.first_air_date}
                  isMovie={movie.title ? true : false}
                />
              </Col>
            ))}
      </Row>
    </>
  );
};

export default MovieList;
