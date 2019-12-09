import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import SimpleImageSlider from "react-simple-image-slider";

const Container = styled.div`
    padding : 20px;    
`;

const HomePresenter = ({ nowPlaying, loading, error, images }) => (
    <>
        <Helmet>
            <title>Home | LucciMovie</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
                <Container>
                    <Helmet>
                        <title>Home | LucciMovie</title>
                    </Helmet>


                    <SimpleImageSlider
                        width={966}
                        height={400}
                        images={images}
                    />

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
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )}
    </>
);


HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;