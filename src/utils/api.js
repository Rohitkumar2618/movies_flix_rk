import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; 
const TMDB_TOKEN =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmYxNmFhNDA4MWU4YTlkOGE4NTZmNTg5OWNmY2VkMSIsInN1YiI6IjY0ZTBmNDQ2ZTE5ZGU5MDEzYTI4N2QwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.332cIDXKbOVgEMCWKzFnY_QqpxhaZlzihEMdL0vfn6k";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};