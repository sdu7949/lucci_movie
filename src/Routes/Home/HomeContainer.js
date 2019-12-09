import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";
import { img1, img2, img3, img4, img5, img6, img7} from "./Images";


const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 }
] ;


export default class extends React.Component {
    state = {
        nowPlaying: null,
        error: null,

        images : null,

        loading: true
    };

    async componentDidMount(){
        try{
            const{
                data : {results : nowPlaying}
            } = await moviesApi.nowPlaying(); 
            
            this.setState({
                nowPlaying, images
            });
            
        }catch{
            this.setState({
                error : "no information. "
            });
        }finally{
            this.setState({
                loading : false
            });
        }
    }

    render() {
        const { nowPlaying, loading, error } = this.state;
        
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                error={error}
                loading={loading}
                images={this.state.images}
            />
            

        )
    }
}