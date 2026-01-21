import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2e1937c4a64c787bb43098c1dc89f8e0",
    }
})