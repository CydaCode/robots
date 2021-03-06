import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'
import { robots } from "./robots";



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }

    }

    onSearchBox =(event)=> {
        this.setState({searchfield: event.target.value})
       
        console.log(event.target.value)

    }
        render() {
            const filterRobot = this.state.robots.filter(robot => {
                return robot.name.toLowerCase()
                .includes(this.state.searchfield.toLowerCase())
            })
            return (
                <div className="tc ">
                    <h1 className="azure f2">ROBOFRIENDS</h1>
                    <SearchBox searchBox = {this.onSearchBox}/>
                    <CardList robots = {filterRobot}/>
                </div>
            );
        }
           
            
       
       
  
    
    
}

export default App;