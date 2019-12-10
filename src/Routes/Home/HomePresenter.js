import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import SimpleImageSlider from "react-simple-image-slider";
import SimpleSlider from "./Carousel";

const Container = styled.div`
    padding : 20px;    
`;

const Footer = styled.div`
    font-size : 14px;
    color : gray;
    text-align : center;
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
                        width={1870}
                        height={750}
                        images={images}
                    />

                    <SimpleSlider  />

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
                
                    <Footer><hr /><br/><br/><br/>주식회사 로디언즈 | 대표이사 윤창기 | 서울시 동작구 상도로 369 숭실대학교 창신관 16207호(114호) 
                    <br/>사업자등록번호 896-87-00606 | 통신판매업 신고번호 2017-서울동작-0636호
                    <br/>계좌번호 기업은행 071-103006-01-012
                    <br/>LAWDIANS All rights reserved.</Footer>
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