import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 20px;    
`;

const Title = styled.div`
    font-size : 25px;
    font-weight: bold;
    text-align : center;
    margin: 20px 10px;
`;

const MoviePresenter = ({ nowPlaying, loading, error }) => (
    <>
        <Helmet>
            <title>Movie | LucciMovie</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
                <Container>

                    <Title>Movie</Title>

                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title="Now Playing">
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
                        </Section>
                    )}

                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section>
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
                        </Section>
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )}
    </>
);

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default MoviePresenter;