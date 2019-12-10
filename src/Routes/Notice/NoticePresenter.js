import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";
import NoticeSection from "Components/NoticeSection";

const Container = styled.div`
    padding : 20px;    
`;

const Title = styled.div`
    font-size : 25px;
    font-weight: bold;
    text-align : center;
    margin: 20px 10px;
`;


const NoticePresenter = ({nowPlaying, loading, error}) => (
    <>
        <Helmet>
            <title>Notice | LucciMovie</title>
        </Helmet>
        {loading ? (
            <Loader/>
        ) : (
                <Container>
                     <Title>Notice</Title>   
                     
                    {nowPlaying && nowPlaying.length > 0 && (
                        <NoticeSection title="Notice">
                            

                            {nowPlaying.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))}
                        </NoticeSection>
                    )}
                    {error && <Message color="#e74c3c" text={error}></Message>}

                </Container>
        )}
    </>
);

NoticePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default NoticePresenter;