import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';

import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';

import './App.css'; 


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots, 
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
          count: 1
        }
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;       
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (  
            <div className='tc'>
                <Header count={this.state.count} />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    { isPending?  <h1> Loading </h1>:
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ ErrorBoundry >
                    }
                </Scroll>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);