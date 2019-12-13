import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import pic1 from 'Routes/Home/Images/1.jpg';
import pic2 from 'Routes/Home/Images/2.jpg';
import pic3 from 'Routes/Home/Images/3.jpg';
import pic4 from 'Routes/Home/Images/4.jpg';
import pic5 from 'Routes/Home/Images/5.jpg';
import pic6 from 'Routes/Home/Images/6.jpg';
import pic7 from 'Routes/Home/Images/7.jpg';

const Container = styled.div`
  font-size: 12px;
`;
 
const Item = styled.div`
  align-content : center;
  background-size : cover;
  border-radius : 5px;
  background-position : center center;
  text-align : center;
`;

const Contents = styled.div`
  margin : 30px 10px 100px 10px;
`;

const Images = styled.img`
  display : block;
  margin: 0px auto;
  width: 1500px;
`;


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <Contents>
          <Slider {...settings}>
            <Item>
              <Images src={pic1} alt="pic1" />
            </Item>
            <Item>
              <Images src={pic2} alt="pic2" />
            </Item>
            <Item>
              <Images src={pic3} alt="pic3" />
            </Item>
            <Item>
              <Images src={pic4} alt="pic4" />
            </Item>
            <Item>
              <Images src={pic5} alt="pic5" />
            </Item>
            <Item>
              <Images src={pic6} alt="pic6" />
            </Item>
            <Item>
              <Images src={pic7} alt="pic7" />
            </Item>
          </Slider>
        </Contents>
      </Container>
    );
  }
}