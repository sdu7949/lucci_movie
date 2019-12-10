import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size : 14px;
    margin-top:20px;
    color: gray;
    text-align : center;
    height : 120px;
`;


export default () => (
    <Container>
        <span role ="img" >
        <hr /><br/>주식회사 로디언즈 | 대표이사 윤창기 | 서울시 동작구 상도로 369 숭실대학교 창신관 16207호(114호) 
                    <br/>사업자등록번호 896-87-00606 | 통신판매업 신고번호 2017-서울동작-0636호
                    <br/>계좌번호 기업은행 071-103006-01-012
                    <br/>LAWDIANS All rights reserved.
        </span>
    </Container>
);