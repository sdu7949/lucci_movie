import axios from "axios";

const api = axios.create({
    baseURL :"https://api.themoviedb.org/3/",
    params:{
        api_key : "6ead4c55bb7e6b2e1c6c59f1c80d4223",
        language : "en-US"
    }
});

export const moviesApi={
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params:{
            append_to_response : "videos"
        }
    }),
    search : (term) => api.get("search/movie", {
        params:{
            query : encodeURIComponent(term)
        }
    })
};

