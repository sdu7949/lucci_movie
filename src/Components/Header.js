import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
    display:flex;
    color:black;
    position :fixed;
    top:0;
    width:100%;
    height:90px;
    align-items : top;
    background-color : white;
    z-index : 10;
    box-shadow : 0px 1px 2px 2px gray;
    text-align : center;
`;

const Homego = styled.div`
    position : relative;
    color:black;
    font-size : 30px;
    margin : 10px 10px;
    font-weight : bold;
    width : 100%;
`;
const List = styled.ul`
    display:flex;
    position : absolute;
    width : 100%;
    height : 10px;
    margin : 30px 0px;
`;

const Item = styled.li`
    width : 100%;
    height:70px;
    text-align:center;
    align-items : center;
    font-size : 23px;
    padding : 15px;
`;

const SLink = styled(Link)`
    height: 30px;
    display:flex;
    align-items: center;
    justify-content : center;
`;


export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Homego current={pathname === "/"}>
            <SLink to="/">루치 영화</SLink>
        </Homego>
        <List>
            <Item current={pathname === "/movie"}>
                <SLink to="/movie">Movie</SLink>
            </Item>
            <Item current={pathname === "/notice"}>
                <SLink to="/notice">Notice</SLink>
            </Item>
        </List>
    </Header>
));