import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child){
        margin-bottom : 50px;
    }
`;

const Title = styled.span`
    font-size: 18px;
    font-weight : 600;
`;

const Grid = styled.div`
    display:grid;
    margin-top : 25px;
    grid-template-rows: repeat(5, 250px);
    grid-gap:25px;
    padding : 0px 30px;
`;



const NoticeSection = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>
            {children}
        </Grid>
    </Container>
)

NoticeSection.propTypes = {
    title:PropTypes.string.isRequired,
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NoticeSection;