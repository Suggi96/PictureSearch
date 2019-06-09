import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bf2bbe3659b6385d92f8a0597cb071e4fd2e817965e6ee56addcad30ec036d52"
  }
});
