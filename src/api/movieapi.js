import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6386ea8d1021b8ae5f21896f87ee2a09",
  },
});
