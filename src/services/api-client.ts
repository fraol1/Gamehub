import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "856eaa3f2f91400db01aa7a31bb14b9e",
  },
});
