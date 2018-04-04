import React from 'react';
import Navbar from './Navbar/navbar';
import Menu from './Menu/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Body from './Body/body';
import { Route, Switch } from 'react-router-dom'
import MovieDetails from './Body/MovieDetailsComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.floatClick = this.floatClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {

        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false });
    }

    floatClick() {
        this.handleToggle();
    }

    render() {
        const style = {
            marginRight: 21
        };
        return (
            <MuiThemeProvider>
                <div>
                    <Navbar />
                    <Menu />
                    <FloatingActionButton onClick={this.floatClick} className="float-button" style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <div>
                        <Drawer
                            docked={false}
                            width={500}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({ open })}>
                            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                        </Drawer>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Body} />
                        <Route path="/movie/:id" component={MovieDetails} />
                    </Switch>
                
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;