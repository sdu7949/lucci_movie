import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";


const HomeContainer = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const{
                    data: {results : nowPlaying}
                } = await moviesApi.nowPlaying();
                setNowPlaying(nowPlaying);

                console.log(nowPlaying);

            } catch{
                setError(`no information`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();


    }, []);

    const handleClick=async()=> {
        try{
            const{
                data: {results : newNowPlaying}
            } = await moviesApi.nowPlaying();
            setNowPlaying([...nowPlaying,...newNowPlaying]);
        }catch{
            setError(`no information button`);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
            <HomePresenter
                nowPlaying={nowPlaying}
                error={error}
                loading={loading}
                handleClick = {handleClick}
            />
        </>
    )
}

export default HomeContainer;