import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "68cfb83e3dfe4ec2ab65190b83a07e95",
    },
});
