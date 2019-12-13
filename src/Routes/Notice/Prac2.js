import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 70,
    border: "1px solid green",
    margin: 6,
    padding: 8
};


const arr = [
    {id:1, name: 'dd'},
    {id:2, name: 'dd2'},
    {id:3, name: 'dd3'},
    {id:4, name: 'dd4'},
];




export default class Scroll extends React.Component {
    constructor(props){
        super(
            props
        );
        this.arr = [
            {id:1, name: 'dd'},
            {id:2, name: 'dd2'},
            {id:3, name: 'dd3'},
            {id:4, name: 'dd4'},
        ];
        this.state = {
            Bae: arr,
            items: Array.from({ length: 5 }),
            
        };
    }
    
    
    
    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                items: this.state.Bae.concat(this.state.Bae)
            });
        }, 1500);
    };

    render() {
        console.log();
        return (
            <div>
                <h1>demo: react-infinite-scroll-component</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{index}
                        </div>
                    ))}
                    
                </InfiniteScroll>
            </div>
        );
    }
}

