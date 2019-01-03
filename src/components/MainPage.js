import React, {Component} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';

import './MainPage.css'; 

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render(){
        const {onSearchChange, robots, isPending} = this.props;       
       
        return (  
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    { isPending?  <h1> Loading </h1>:
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots(robots)} />
                        </ ErrorBoundry >
                    }
                </Scroll>
            </div>
        );

    }
}

export default MainPage;