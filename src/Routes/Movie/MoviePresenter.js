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

const Form = styled.form`
    margin-bottom : 50px;
    width:100%;
    box-shadow : 1px 1px 1px gray;
    display : flex;
    left : 0;
`;

const Input = styled.input`
    all:unset;
    font-size : 28px;
    width:100%;
`;

const MoviePresenter = ({
    nowPlaying,
    loading,
    error,
    movieResults,
    searchTerm,
    handleSubmit,
    updateTerm
}) => (
        <Container>
            <Helmet>
                <title>Movie | LucciMovie</title>
            </Helmet>
            <Title>Movie</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies..."
                    value={searchTerm}
                    onChange={updateTerm} />
            </Form>
            {loading ? (
                <Loader />
            ) : (
                    <>
                        {!movieResults && nowPlaying && nowPlaying.length > 0 && 
                        (
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

                        {movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                {movieResults.map(movie => (
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

                        {movieResults &&
                            movieResults.length === 0 && (
                                <Message text="Nothing found" color="#95a5a6" />
                            )}
                    </>
                )}
        </Container>
    );

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func,
    updateTerm: PropTypes.func
};

export default MoviePresenter;