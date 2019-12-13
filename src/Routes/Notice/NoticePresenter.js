import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Helmet from "react-helmet";
import Media from "Routes/Notice/Media";
import Scroll from "Routes/Notice/Prac"

const Container = styled.div`
    padding : 20px;    
`;

const Title = styled.div`
    font-size : 25px;
    font-weight: bold;
    text-align : center;
    margin: 20px 10px;
`;


const NoticePresenter = ({ loading, error}) => (
    <>
        <Helmet>
            <title>Notice | LucciMovie</title>
        </Helmet>
        {loading ? (
            <Loader/>
        ) : (
                <Container>
                     <Title>Notice</Title>   
                     
                    <Media></Media>

                    {error && <Message color="#e74c3c" text={error}></Message>}

                    <Scroll></Scroll>
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