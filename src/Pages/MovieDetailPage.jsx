import { Skeleton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import movieapi from "../api/movieapi";
import serverapi from "../api/serverapi";
import MovieDetail from "../Components/MovieDetail/MovieDetail";
import MovieList from "../Components/MoviesList/MovieList";
import Navigatebar from "../Components/Navbar/Navigatebar";
import TitleSection from "../Components/TitleSection/TitleSection";
import TrailerCard from "../Components/TrailerCard/TrailerCard";
import useSnackbar from "../hooks/useSnackbar";
import popcornIcon from "../img/popcorn.svg";

const BgComment = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px 28px;
  margin-bottom: 18px;
`;

const Name = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const CommentLabel = styled.h5`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #434343;
  margin-top: 15px;
`;

const MovieDetailPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [trailerData, setTrailerData] = useState([]);
  const [similiar, setSimiliar] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [newcommet, setNewcommet] = useState(false);
  const [error, setError] = useState("");

  const snackbar = useSnackbar();

  let { id, type } = useParams();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await serverapi.post(`api/comment/${type}/${id}`, {
        text: comment,
      });
      setNewcommet(true);
      console.log(res.data);
      snackbar.success(res.data.message);
      setComment("");
    } catch (e) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await movieapi.get(`${type}/${id}`);
      setMovieData(res.data);
      setGenres(res.data.genres);
      const resActor = await movieapi.get(`${type}/${id}/credits`);
      setCrewData(resActor.data);
      const resTrailer = await movieapi.get(`${type}/${id}/videos`);
      setTrailerData(resTrailer.data.results);
      const resSimiliar = await movieapi.get(`${type}/${id}/similar`);
      setSimiliar(resSimiliar.data.results);
      const resComments = await serverapi.get(`api/comment/${id}`);
      setComments(resComments.data.data);
      setLoading(false);
      setNewcommet(false);
    };
    fetchData();
  }, [id, type, newcommet]);
  return (
    <>
      <Navigatebar />
      <MovieDetail
        img={movieData.poster_path}
        title={movieData.original_title ?? movieData.name}
        procedure={
          movieData.production_companies &&
          (movieData.production_companies.length === 0
            ? "NaN"
            : movieData.production_companies[0].name)
        }
        tagline={movieData.tagline}
        synopsis={movieData.overview}
        genres={genres}
        date={movieData.release_date ?? movieData.first_air_date}
        rating={movieData.vote_average}
        director={
          crewData.crew && crewData.crew.filter((n) => n.job === "Director")
        }
        loading={loading}
        isMovie={movieData.original_title ? true : false}
        episodeCount={
          movieData.number_of_episodes && movieData.number_of_episodes
        }
      />
      <Container>
        <div
          style={{ fontSize: "24px", textAlign: "center", marginTop: "30px" }}
        >
          Trailer
        </div>
        <Row className="mt-4">
          {loading
            ? [...Array(2)].map((n, idx) => (
                <Col md={6} className="mb-3" key={idx}>
                  <Skeleton variant="rect" width="100%" height={300} />
                </Col>
              ))
            : trailerData
                .filter((n) => n.type === "Trailer")
                .slice(0, 2)
                .map((n, idx) => (
                  <Col md={6} className="mb-3" key={idx}>
                    <TrailerCard
                      url={n.key}
                      title={n.name}
                      date={n.published_at}
                    />
                  </Col>
                ))}
        </Row>
        <div className="mt-3">
          <TitleSection img={popcornIcon} title="What People Say?" />
        </div>
        <Row>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="my-4">
              <Form.Control
                type="text"
                placeholder="Write your comment..."
                name="comment"
                style={{ padding: "18px 20px" }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Row>
        {comments.slice(0, 5).map((comment) => (
          <BgComment>
            <Name>{comment.user.name}</Name>
            <CommentLabel>{comment.text}</CommentLabel>
          </BgComment>
        ))}
        <div className="mt-5">
          <TitleSection img={popcornIcon} title="You May Like It" />
        </div>
        <Row>
          <MovieList moviesList={similiar} isLimit4={true} loading={loading} />
        </Row>
      </Container>
    </>
  );
};

export default MovieDetailPage;
