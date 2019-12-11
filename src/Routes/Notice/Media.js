import React from 'react';
import { Media } from 'reactstrap';
import styled from "styled-components";
import mypic1 from '../../assets/1.jpg';

const MediaContainer=styled.div`
    position : relative;
    display : flex;
    margin: 30px 20px;
    padding : 50px 20px;
`;
const MediaName=styled.div`
    font-size : 40px;
    color : green;
    margin-bottom : 10px;
    font-weight : bold;
`;

const MediaImage=styled.div`
    height : 150px;
    margin : 10px 45px 5px 0px;
`;

const MediaContents=styled.div`
    font-size : 25px;
    margin: 10px 5px 5px 30px;
`;


const MediaNotice = () => {
  return (
    <MediaContainer>
      
      <MediaContents body>
        <MediaName heading>
          Name
        </MediaName>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </MediaContents>
      <MediaImage right href="#">
        <Media src={mypic1} height="240px" alt="Generic placeholder image" />
      </MediaImage>
    </MediaContainer>
  );
};

export default MediaNotice;