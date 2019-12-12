import React from 'react';
import { Media } from 'reactstrap';
import styled from "styled-components";
import mypic1 from '../../assets/1.jpg';
import mypic2 from '../../assets/2.jpg';
import mypic3 from '../../assets/3.jpg';
import mypic4 from '../../assets/4.jpg';
import mypic5 from '../../assets/5.jpg';

const Container = styled.div`
position:relative;
display : inline-block;
  margin: 30px 20px;
    padding : 30px 20px;
`;

const Contents = styled.div`
display : flex;
margin: 30px 15px;
font-size : 18px;
color : black;
font-weight : bold;
`;

const Image = styled.div`
    margin : 0px 0px 0px 15px;
`;

const Name = styled.div`
    font-size : 40px;
    color : green;
    margin-bottom : 10px;
    font-weight : bold;
`;

const movieList = [
  {
    id: 1,
    name: "겨울왕국2",
    contents: `내 마법의 힘은 어디서 왔을까? 나를 부르는 저 목소리는 누구지? 
    어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.     
    트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.`,
    image: mypic1
  },
  {
    id: 2,
    name: "포드V페라리",
    contents: `자존심을 건 대결의 시작!
    1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해
     스포츠카 레이스를 장악한 절대적 1위 ‘페라리’와의 인수 합병을 추진한다.
     막대한 자금력에도 불구, 계약에 실패하고 엔초 페라리로부터 모욕까지 당한 헨리 포드 2세는
     르망 24시간 레이스에서 페라리를 박살 낼 차를 만들 것을 지시한다.`,
    image: mypic2
  },
  {
    id: 3,
    name: "나이브스 아웃",
    contents: `베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다.
    그의 죽음의 원인을 파헤치기 위해 경찰과 함께 탐정 브누아 블랑이 파견 되는데…
    베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다.
    그의 죽음의 원인을 파헤치기 위해 경찰과 함께 탐정 브누아 블랑이 파견 되는데…`,
    image: mypic3
  },
  {
    id: 4,
    name: "감쪽같은 그녀",
    contents: `“초면에 실례하겠습니다~”
    72살 나 홀로 라이프를 즐기는 ‘말순’ 할매의 인생에
    듣도 보도 못한 손녀(?)가 나타났다!
    
    특기는 자수, 용돈 벌이는 그림 맞추기(?)
    동네를 주름 잡으며 나 혼자 잘 살고 있던 ‘말순’ 할매 앞에
    다짜고짜 자신을 손녀라고 소개하는 열두 살 ‘공주’가
    갓난 동생 ‘진주’까지 업고 찾아온다.`,
    image: mypic4
  },
  {
    id: 5,
    name: "라스트 크리스마스",
    contents: `이번 크리스마스에는 행복할 수 있을까요?
    친구도 없고, 연애도 못하고, 엄마에게 얹혀 살고 있는
     인생 뭐 하나 마음대로 되는게 없는 ‘케이트’(에밀리아 클라크).
     가수를 꿈꾸지만 매번 오디션에서 떨어지고, 마지못해 별볼일 없는 크리스마스 장식용품 가게에서 일하고 있다.
     매일 반복되는 일상이 지나고 크리스마스가 다가오던 어느 날, 노숙자 센터에서 자원 봉사를 하는 ‘톰’(헨리 골딩)을 우연히 만나게 된다.`,
    image: mypic5
  },
];

const MediaNotice = () => {
  return (

    <Container>
      {movieList.map(notice => (
        <>

          <Contents body>
            <div style={{ flexDirection: 'column' }}>

              <Name heading>
                {notice.name}
              </Name>
              {notice.contents}
            </div>
            <Image left href="#">
              <Media src={notice.image} height="200px" alt="Generic placeholder image" />
            </Image>
          </Contents>
        </>
      ))}
    </Container>
  );
};

export default MediaNotice;