import React from 'react';
import TextField from 'material-ui/TextField';
import SearchComponent from './searchComponent';
import axios from 'axios';
import MovieCardComponent from './MovieCardComponent';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import '../../styles/body.scss';
import '../../styles/mybody.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:"",
            movieList:[],
            loadCounter:0,
            showList: false
        }

        this.searchForMovie = this.searchForMovie.bind(this);
        this.cardClicked = this.cardClicked.bind(this);
        this.incrementLoadCounter = this.incrementLoadCounter.bind(this);
    }

    searchForMovie(searchText){
        this.setState({loadCounter:0, movieList:[], showList: false});
        searchText = searchText.replace(/ /g, '+')
        let url = "http://www.omdbapi.com/?apikey=d29ce2b2&s="+ searchText;
        axios.get(url)
            .then((response) => {
                this.setState({movieList: response.data.Search});
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    cardClicked(movieId){
        this.props.history.push("/movie/"+movieId);
    }

    incrementLoadCounter(){
        this.setState({loadCounter:this.state.loadCounter+1}, () => {
            if(this.state.loadCounter == this.state.movieList.length){
                setTimeout(() => {
                    this.setState({showList:true});
                }, 100);
            }
        });
    }

    render() {
        
        return (
            <div className="body-container">
                <SearchComponent 
                    searchForMovie={this.searchForMovie}
                />
                <div className="movieList" style={this.state.showList == true ? {opacity: "1"} : {opacity:"0"}}>
                    {
                        this.state.movieList.map((movie, index) => {
                            if(movie.Poster && movie.Poster === "N/A") movie.Poster = "https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png";
                            return <MovieCardComponent key={index} {...movie} 
                            cardClicked={this.cardClicked} 
                            incrementLoadCounter={this.incrementLoadCounter}
                            />
                        })
                    }
                </div>
              
            </div>
        );
    }
}