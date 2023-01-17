import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';


class App extends Component {
    constructor (){
        super();
        this.state = {
            task : {
                text: '',
                id: uniqid(),
            },
            tasks : [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        this.setState({ task:{
                text: event.target.value,
                id : this.state.task.id, 
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task :{text: '',id: uniqid()},
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