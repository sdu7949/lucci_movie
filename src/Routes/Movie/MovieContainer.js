import React, {useState, useEffect} from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";

const MovieContainer = () =>{
    const [nowPlaying, setNowPlaying]=useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [movieResults, setMovieResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const{
                    data: {results : nowPlaying}
                } = await moviesApi.nowPlaying();
                setNowPlaying(nowPlaying);
            } catch{
                setError(`no information`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
 
    const handleSubmit = event => {
        event.preventDefault();
        if (searchTerm !== "") {
            searchByTerm();
        }
    };

    const updateTerm = event => {
        const { target: { value } } = event;
        setSearchTerm(value);
    };

    const searchByTerm = async () => {
        setLoading(true);
        try{
            const {
                data: { results: movieResults }
            } = await moviesApi.search(searchTerm);
            setMovieResults(movieResults);
        }catch{
            setError(`Can't find results`);
        }finally{
            setLoading(false);
        }
    };

    return (
        <MoviePresenter
            nowPlaying={nowPlaying}
            error={error}
            loading={loading}
            searchTerm={searchTerm}
            handleSubmit={handleSubmit}
            updateTerm={updateTerm}
            movieResults={movieResults}
        />
    )
}

export default MovieContainer;