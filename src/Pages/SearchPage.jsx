import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import movieapi from "../api/movieapi";
import MovieList from "../Components/MoviesList/MovieList";
import Navigatebar from "../Components/Navbar/Navigatebar";
import SearchBar from "../Components/SearchBar/SearchBar";
import TitleSection from "../Components/TitleSection/TitleSection";
import popcornIcon from "../img/popcorn.svg";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [movie, setMovie] = useState({
    movie: [],
    tv: [],
  });
  const [loading, setLoading] = useState({
    tv: true,
    movie: true,
  });

  useEffect(() => {
    const fetchDataMovie = async () => {
      const res = await movieapi.get(`search/movie?query=${q}`);
      setMovie((m) => ({
        ...m,
        movie: res.data.results.slice(0, 4),
      }));
      setLoading((l) => ({
        ...l,
        movie: false,
      }));
    };
    const fetchDataTv = async () => {
      const res = await movieapi.get(`search/tv?query=${q}`);
      setMovie((m) => ({
        ...m,
        tv: res.data.results.slice(0, 4),
      }));
      setLoading((l) => ({
        ...l,
        tv: false,
      }));
    };
    fetchDataMovie();
    fetchDataTv();
  }, [q]);

  return (
    <>
      <Navigatebar />
      <Container>
        <Row className="mb-4">
          <Col
            md={6}
            className="order-md-responsive"
            style={{ alignSelf: "center" }}
          >
            Search Key : {q}
          </Col>
          <Col md={6}>
            <SearchBar disabled={false} />
          </Col>
        </Row>
        <TitleSection img={popcornIcon} title="Movie" />
        {movie.movie.length > 0 ? (
          <MovieList
            moviesList={movie.movie}
            isLimit4={true}
            loading={loading.movie}
          />
        ) : (
          <h5 style={{ textAlign: "center", margin: "100px" }}>No Result</h5>
        )}
        <TitleSection img={popcornIcon} title="TV Shows" />
        {movie.movie.length > 0 ? (
          <MovieList
            moviesList={movie.tv}
            isLimit4={true}
            loading={loading.tv}
          />
        ) : (
          <h5 style={{ textAlign: "center", margin: "10px" }}>No Result</h5>
        )}
      </Container>
    </>
  );
};

export default SearchPage;
