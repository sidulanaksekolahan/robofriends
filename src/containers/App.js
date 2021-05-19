import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // fetch data from end point and update the state of robots
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({
                robots: json
            }))
    }

    onSearchChange = (event) => {
        // update searchField based on onChange input
        this.setState({
            searchField: event.target.value
        })
    }
    
    render() {

        const { robots, searchField } = this.state;
        // filter robot based on searchField
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(
                searchField.toLocaleLowerCase());
        })

        return !robots.length ?
                <h1>Loading</h1>
            : 
            (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary> 
                        {/* If anything in the Cardlist fails, ErrorBoundary will catch it and display our error message */}
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
 
export default App;
