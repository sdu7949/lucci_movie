import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import mypic1 from '../../assets/1.jpg';
import mypic2 from '../../assets/2.jpg';
import mypic3 from '../../assets/3.jpg';
import mypic4 from '../../assets/4.jpg';
import mypic5 from '../../assets/5.jpg';
import mypic6 from '../../assets/6.jpg';
import mypic7 from '../../assets/7.jpg';
import mypic8 from '../../assets/8.jpg';

const Container = styled.div`
  font-size: 12px;
  margin-bottom : 100px;
`;

const Title = styled.div`
  font-size : 18px;
  font-weight : 510;
  margin : 10px 0px 30px 0px;
`;

const Item = styled.div`
  align-content : center;
  background-size : cover;
  border-radius : 5px;
  background-position : center center;
  text-align : center;
`;

const Contents = styled.div`
  margin : 50px 30px;
`;

const Images = styled.img`
  display : block;
  margin: 0px auto;
`;


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2
    };
    return (
      <Container>
        <hr></hr>
        <Title> Hot Movies </Title>

        <Contents>
          <Slider {...settings}>
            <Item>
              <Images src={mypic1} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic2} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic3} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic4} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic5} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic6} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic7} height="300px" alt="mypic" />
            </Item>
            <Item>
              <Images src={mypic8} height="300px" alt="mypic" />
            </Item>
          </Slider>
        </Contents>
      </Container>
    );
  }
}