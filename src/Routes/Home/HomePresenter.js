import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Carousel from "./Carousel";
import Footer from "Components/Footer";
import Slider from "Routes/Home/Slider";


const Container = styled.div`
    padding : 20px;    
`;

const ButtonContainer=styled.div`
    text-align:center;
`;

const Button= styled.button`
    margin : 0 auto;
    width : 70%;
    left : 50%;
`;



const HomePresenter = ({ nowPlaying, loading, error, handleClick }) => (
    <>
        <Helmet>
            <title>Home | LucciMovie</title>
        </Helmet>
        {loading ? (
            <Loader />
        ) : (
                <Container>

                    <Slider />

                    <Carousel  />

                    <hr></hr>
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
                    


                    <ButtonContainer>
                        <Button onClick={handleClick}>누르면 아이템이 더 나오는 버튼</Button>
                    </ButtonContainer>

                
                    <Footer />
                </Container>
            )}
    </>
);


HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleClick : PropTypes.func,
    // newNowPlaying: PropTypes.func,
};

export default HomePresenter;