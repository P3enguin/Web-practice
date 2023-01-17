import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor (){
        super();
        this.state = {
            task : '',
            tasks : [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({task:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task : '',
        })
    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='taskInput'>Enter task</label>
                    <input type="text" id="taskInput" onChange={this.handleInput}></input>
                    <button type="submit" >Submit</button>
                </form>
                <Overview tasks={this.state.tasks}/>
            </div>
        )
    }

}
 
export default App;