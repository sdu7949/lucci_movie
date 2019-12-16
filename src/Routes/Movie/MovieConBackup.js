import React from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        error: null,
        loading: true,
        movieResults: null,
        searchTerm: "",
    };
 
    handleSubmit = event => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        const { target: { value } } = event;
        this.setState({
            searchTerm: value
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading: true
        });
        try {
            const {
                data: { results: movieResults }
            } = await moviesApi.search(searchTerm);
            this.setState({
                movieResults
            });
        } catch{
            this.setState({
                error: "Can't find results. "
            });
        } finally {
            this.setState({
                loading: false
            })
        }
    };



    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();
            this.setState({
                nowPlaying
            });

        } catch{
            this.setState({
                error: "no information. "
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        const { nowPlaying, loading, error, movieResults, searchTerm } = this.state;
        return (
            <MoviePresenter
                nowPlaying={nowPlaying}
                error={error}
                loading={loading}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                movieResults={movieResults}
            />
        )
    }
}
