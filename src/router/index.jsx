import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import TvShowsPage from "../Pages/TvShowsPage";
import ScrollToTop from "../Components/Utilites/ScrollToTop";
import MovieDetailPage from "../Pages/MovieDetailPage";
import SearchPage from "../Pages/SearchPage";
import NotFoundPage from "../Pages/NotFoundPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AuthRoute from "../router/AuthRoute";
import { UserWrapper } from "../context/UserContext";
import ProfilePage from "../Pages/ProfilePage";

const Routers = () => {
  return (
    <BrowserRouter>
      <UserWrapper>
        <GlobalStyle />
        <ScrollToTop />
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-shows" element={<TvShowsPage />} />
          <Route path="/:type/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/person" element={<NotFoundPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </UserWrapper>
    </BrowserRouter>
  );
};

export default Routers;
