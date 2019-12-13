import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";


const Container = styled.div`
    height : 300;
    margin : 15px;
    padding : 8px;
    position : relative;
    display : flex;
    
`;

const Titles =styled.div`
    font-size : 30px;
    font-weight : bold;
    color : red;
    margin : 10px 25px;
`;

const Contents = styled.div`
    font-size : 20px;
    color : black;
    margin : 10px 25px;
    height : 150px;
`;

const Images = styled.div`
    right: 16px;
`;

export default class Scroll extends React.Component {
    state = {

        items: Array.from([
            {
                id: 1,
                name: '겨울왕국2', 
                contents: `내 마법의 힘은 어디서 왔을까? 나를 부르는 저 목소리는 누구지? 
                어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.     
                트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.`, 
                image: 'http://movie-phinf.pstatic.net/20191121_221/1574298335357mqgLk_JPEG/movie_image.jpg'
            },
            { 
                id: 2, 
                name: '포드V페라리', 
                contents: `자존심을 건 대결의 시작!
                1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해
                 스포츠카 레이스를 장악한 절대적 1위 ‘페라리’와의 인수 합병을 추진한다.
                 막대한 자금력에도 불구, 계약에 실패하고 엔초 페라리로부터 모욕까지 당한 헨리 포드 2세는
                 르망 24시간 레이스에서 페라리를 박살 낼 차를 만들 것을 지시한다.`, 
                image: `https://movie-phinf.pstatic.net/20191204_91/15754257752042kHvB_JPEG/movie_image.jpg` 
            },
            { 
                id: 3, 
                name: '쥬만지', 
                contents: `진화된 게임, 주어진 목숨은 3개! 사라진 친구를 찾아 반드시 탈출하라!
                쥬만지 게임으로부터 가까스로 탈출해 평화로운 일상을 보내던 스펜서와 친구들.
                 어느 날, 스펜서는 망가진 쥬만지 게임 속으로 사라지고
                 마사와 베서니, 프리지 역시 그를 찾기 위해 다시 들어가기로 결심한다.
                 그리고 우연히 게임에 합류하게 된 새로운 멤버, 스펜서의 할아버지 에디와 마일로.
                 위험천만한 게임 속으로 들어가게 된 이들은 정글부터 설산, 사막까지
                 한층 진화된 예측 불가능한 게임 속에서 현실 세계로 돌아오기 위해 목숨을 건 미션을 시작하는데......`, 
                image: `https://movie-phinf.pstatic.net/20191120_230/15742165480563skun_JPEG/movie_image.jpg` 
            },
            { 
                id: 4, 
                name: '쥬만지', 
                contents: `진화된 게임, 주어진 목숨은 3개! 사라진 친구를 찾아 반드시 탈출하라!
                쥬만지 게임으로부터 가까스로 탈출해 평화로운 일상을 보내던 스펜서와 친구들.
                 어느 날, 스펜서는 망가진 쥬만지 게임 속으로 사라지고
                 마사와 베서니, 프리지 역시 그를 찾기 위해 다시 들어가기로 결심한다.
                 그리고 우연히 게임에 합류하게 된 새로운 멤버, 스펜서의 할아버지 에디와 마일로.
                 위험천만한 게임 속으로 들어가게 된 이들은 정글부터 설산, 사막까지
                 한층 진화된 예측 불가능한 게임 속에서 현실 세계로 돌아오기 위해 목숨을 건 미션을 시작하는데......`, 
                image: `https://movie-phinf.pstatic.net/20191120_230/15742165480563skun_JPEG/movie_image.jpg` 
            },
            { 
                id: 5, 
                name: '쥬만지', 
                contents: `진화된 게임, 주어진 목숨은 3개! 사라진 친구를 찾아 반드시 탈출하라!
                쥬만지 게임으로부터 가까스로 탈출해 평화로운 일상을 보내던 스펜서와 친구들.
                 어느 날, 스펜서는 망가진 쥬만지 게임 속으로 사라지고
                 마사와 베서니, 프리지 역시 그를 찾기 위해 다시 들어가기로 결심한다.
                 그리고 우연히 게임에 합류하게 된 새로운 멤버, 스펜서의 할아버지 에디와 마일로.
                 위험천만한 게임 속으로 들어가게 된 이들은 정글부터 설산, 사막까지
                 한층 진화된 예측 불가능한 게임 속에서 현실 세계로 돌아오기 위해 목숨을 건 미션을 시작하는데......`, 
                image: `https://movie-phinf.pstatic.net/20191120_230/15742165480563skun_JPEG/movie_image.jpg` 
            },
        ])

    };

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from([
                    { 
                        id: 1, 
                        name: 'Frozen2', 
                        contents: `내 마법의 힘은 어디서 왔을까? 나를 부르는 저 목소리는 누구지? 
                        어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 왕국을 위협한다.     
                        트롤은 모든 것은 과거에서 시작되었음을 알려주며 엘사의 힘의 비밀과 진실을 찾아 떠나야한다고 조언한다.`, 
                        image: 'http://movie-phinf.pstatic.net/20191121_221/1574298335357mqgLk_JPEG/movie_image.jpg', 
                    },
                    { 
                        id: 2, 
                        name: '포드V페라리', 
                        contents: `자존심을 건 대결의 시작!
                        1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해
                         스포츠카 레이스를 장악한 절대적 1위 ‘페라리’와의 인수 합병을 추진한다.
                         막대한 자금력에도 불구, 계약에 실패하고 엔초 페라리로부터 모욕까지 당한 헨리 포드 2세는
                         르망 24시간 레이스에서 페라리를 박살 낼 차를 만들 것을 지시한다.`, 
                        image: `https://movie-phinf.pstatic.net/20191204_91/15754257752042kHvB_JPEG/movie_image.jpg`, 
                    },
                    { 
                        id: 3, 
                        name: '쥬만지', 
                        contents: `진화된 게임, 주어진 목숨은 3개! 사라진 친구를 찾아 반드시 탈출하라!
                        쥬만지 게임으로부터 가까스로 탈출해 평화로운 일상을 보내던 스펜서와 친구들.
                         어느 날, 스펜서는 망가진 쥬만지 게임 속으로 사라지고
                         마사와 베서니, 프리지 역시 그를 찾기 위해 다시 들어가기로 결심한다.
                         그리고 우연히 게임에 합류하게 된 새로운 멤버, 스펜서의 할아버지 에디와 마일로.
                         위험천만한 게임 속으로 들어가게 된 이들은 정글부터 설산, 사막까지
                         한층 진화된 예측 불가능한 게임 속에서 현실 세계로 돌아오기 위해 목숨을 건 미션을 시작하는데......`, 
                        image: `https://movie-phinf.pstatic.net/20191120_230/15742165480563skun_JPEG/movie_image.jpg` 
                    },
                ]))
            });
        }, 1500);
    };

    render() {


        return (
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
                {this.state.items.map((i, index) => (
                    <Container key={index}>
                        <div style={{ flexDirection: 'column' , width : '87%' }}>
                            <Titles>{i.name}</Titles>
                            <Contents>{i.contents}</Contents>
                        </div>
                        <Images><img src={i.image} height="200px" alt="imagezx"></img></Images>
                    </Container>
                ))}
            </InfiniteScroll>
        );
    }
}

