import React, {useState, useEffect} from "react";
import NoticePresenter from "./NoticePresenter";
import { moviesApi } from "api";

const NoticeContainer = () =>{
  const [nowPlaying, setNowPlaying] = useState(null);
  const [error, setError]= useState(null);
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

  return(
    <>
      <NoticePresenter 
        nowPlaying={nowPlaying}
        error={error}
        loading={loading}
      />
    </>
  )

}

export default NoticeContainer;

