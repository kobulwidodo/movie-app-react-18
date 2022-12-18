import React, { useEffect, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import Navigatebar from "../Components/Navbar/Navigatebar";
import profile from "../img/photo.png";
import popcornIcon from "../img/popcorn.svg";
import calendar from "../img/calendar.svg";
import pencil from "../img/pencil.svg";
import TitleSection from "../Components/TitleSection/TitleSection";
import { serverapi } from "../api";
import useSnackbar from "../hooks/useSnackbar";

const ImageProfile = styled.img`
  width: 100%;
  max-width: 137px;
`;

const CardProfile = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

const Name = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #434343;
  margin-bottom: 15px;
`;

const Joined = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #6d6d6d;
`;

const BgComment = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px 28px;
  margin-bottom: 18px;
`;

const MoviesName = styled.h1`
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

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [isEditBio, setIsEditBio] = useState(false);
  const [isNewBio, setIsNewBio] = useState(false);
  const [comments, setComments] = useState([]);

  const snackbar = useSnackbar();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await serverapi.put(`user/bio`, {
        bio: bio,
      });
      console.log(res.data);
      snackbar.success(res.data.message);
      setIsNewBio(true);
      setIsEditBio(!isEditBio);
    } catch (e) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const resBio = await serverapi.get(`user/me`);
      setBio(resBio.data.data.data.Bio);
      const resComments = await serverapi.get(`api/comment/user`);
      setComments(resComments.data.data);
    };
    fetchData();
    setIsNewBio(false);
  }, [isNewBio]);

  return (
    <>
      <Navigatebar />
      <Container>
        <CardProfile>
          <ImageProfile src={profile} className="" alt="" />
          <div className="">
            <Name>Rakhmad Giffari Nurfadhilah</Name>
            <div className="d-flex align-items-center gap-3">
              <img
                src={calendar}
                style={{ width: "100%", maxWidth: "20px" }}
                alt=""
              />
              <Joined>Bergabung tanggal 9 November 2021</Joined>
            </div>
          </div>
        </CardProfile>
        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <TitleSection img={popcornIcon} title="About Me" />
            <img
              src={pencil}
              alt=""
              onClick={(e) => setIsEditBio(!isEditBio)}
            />
          </div>
          <Row>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="my-4">
                <Form.Control
                  type="text"
                  name="bio"
                  style={{ padding: "18px 20px" }}
                  value={bio || ""}
                  readOnly={!isEditBio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Row>
        </div>
        <div className="mt-5 mb-4">
          <TitleSection img={popcornIcon} title="Last Comment" />
        </div>
        {comments.map((comment) => (
          <BgComment>
            <MoviesName>{comment.series.title}</MoviesName>
            <CommentLabel>{comment.text}</CommentLabel>
          </BgComment>
        ))}
      </Container>
    </>
  );
};

export default ProfilePage;
