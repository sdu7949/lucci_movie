import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
    color:black;
    position :fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items : center;
`;

const Homego = styled.div`
    position : relative;
    left : 41%;
    color:black;
    font-size : 20px;
    margin : 30px 10px;
    
`;
const List = styled.ul`
    display:flex;
    position : absolute;
    left: 40.5%;
    height : 17px;
    margin : 30px 0px;

`;

const Item = styled.li`
    position : relative;
    width:58px;
    height:30px;
    text-align:center;
    align-items : center;
`;


const SLink = styled(Link)`
    height: 20px;
    display:flex;
    align-items: center;
    justify-content : center;
`;


export default () => (
    <Header>
        <Homego>
            <SLink to="/">루치 영화</SLink>
        </Homego>
        <List>
            <Item>
                <SLink to="/movie">Movie</SLink>
            </Item>
            <Item>
                <SLink to="/notice">Notice</SLink>
            </Item>
        </List>
    </Header>
);