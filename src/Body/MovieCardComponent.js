import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class MovieCard extends React.Component {
    constructor(){
        super();

        this.handleCardClick = this.handleCardClick.bind(this);
        this.imageLoaded = this.imageLoaded.bind(this);
    }

    handleCardClick() {
        const {imdbID, cardClicked} = this.props;
        cardClicked(imdbID);
    }

    imageLoaded(){
        let {incrementLoadCounter} = this.props;
        incrementLoadCounter();
    }

    render() {
        const { Title, Year, Type, Poster } = this.props
        return (
            <div onClick={this.handleCardClick}>
                <Card >
                    <CardMedia
                        >
                        <img src={Poster} alt="" onLoad={this.imageLoaded} />
                    </CardMedia>
                    <CardTitle title={Title} subtitle={Year} />
                    <CardText>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure debitis animi non dicta saepe reiciendis veniam repellendus vel dolor consequatur!
                </CardText>
                </Card>
            </div>
        );
    }
}