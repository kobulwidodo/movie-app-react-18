import React, { createContext, useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { serverapi } from "../api";
import { getUser } from "../api/model/user";
import useSnackbar from "../hooks/useSnackbar";

export const defaultValue = {
  isAuthenticated: !!localStorage.getItem("movieapp_token"),
  userInfo: null,
  login: () => {},
  logout: () => {},
  fetchUser: () => {},
};

const UserContext = createContext(defaultValue);

export const UserWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultValue.isAuthenticated
  );
  const [userInfo, setUserInfo] = useState(defaultValue.userInfo);

  const snackbar = useSnackbar();

  const login = (token) => {
    serverapi.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
    localStorage.setItem("movieapp_token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo({});
    localStorage.removeItem("movieapp_token");
    serverapi.defaults.headers.common["Authorization"] = "";
    snackbar.success("Successfully logout");
    redirect("/");
  };

  const fetchUser = async () => {
    try {
      const res = await getUser();
      if (res.data.data) {
        setUserInfo(res.data.data);
      }
    } catch (error) {
      snackbar.error(error.response?.data.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        userInfo,
        fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
