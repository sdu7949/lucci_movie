import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Helmet from "react-helmet";
import Scroll from "Routes/Notice/Scroll"

const Container = styled.div`   
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
                     
                    
                    {error && <Message color="#e74c3c" text={error}></Message>}

                    <Scroll />
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