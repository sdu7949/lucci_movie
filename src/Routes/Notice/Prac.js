import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import mypic1 from '../../assets/1.jpg';
import mypic2 from '../../assets/2.jpg';

const style = {
    height: 250,
    border: "1px solid green",
    margin: 6,
    padding: 8
};


export default class Scroll extends React.Component {
    state = {

        items: Array.from([
            {
                id: 1,
                name: 'Frozen2', 
                contents: 'frozen 설명', 
                image: 'http://movie-phinf.pstatic.net/20191121_221/1574298335357mqgLk_JPEG/movie_image.jpg'
            },
            { 
                id: 2, 
                name: '페라리', 
                contents: '페라리 설명', 
                image: mypic2 },
        ])

    };

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from([
                    { id: 1, name: 'Frozen2', contents: 'frozen 설명', image: mypic1 },
                    { id: 2, name: '페라리', contents: '페라리 설명', image: mypic2 },
                ]))
            });
        }, 1500);
    };

    render() {


        return (
            <div>

                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            name : {i.name}
                            <br></br>
                            contents : {i.contents}
                            <br></br>
                            image : <img src={i.image} height="200px"></img>
                        </div>
                    ))}
                </InfiniteScroll>




            </div>
        );
    }
}

