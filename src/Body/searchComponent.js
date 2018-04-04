import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            searchField: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }

    searchClick(){
        let { searchField } = this.state;
        this.props.searchForMovie(searchField);
    }

    handleChange({target}){
        let text = target.value;
        this.setState({
            searchField: text
        })
    }

    render(){
    return (
        <div className="search-container">
            <div>
                <TextField
                    hintText="Search for movie"
                    fullWidth={true}
                    onChange={this.handleChange}
                    value={this.state.searchField}
                />
            </div>
            <div>
                <RaisedButton 
                label="Search" 
                fullWidth={true} 
                primary={true}
                onClick={this.searchClick}
                />
            </div>
        </div>
       
    );
}
}