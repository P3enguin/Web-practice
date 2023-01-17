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
                index: 1,
            },
            tasks : [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInput(event){
        this.setState({ task:{
                text: event.target.value,
                id : this.state.task.id,
                index: this.state.task.index,
            }
        });
    }


    handleDelete(taskIndex){
        console.log(taskIndex);
        const arrayFilltered = this.state.tasks.filter(t => t.index !== taskIndex );
        this.setState({ tasks:arrayFilltered});
    }

    handleSubmit(event){ 
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task :{text: '',id: uniqid(),index: this.state.task.index + 1},
        })
    
    }

    render() {
        const {tasks,task} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='taskInput'>Enter task</label>
                    <input type="text" id="taskInput" value={task.text} onChange={this.handleInput}></input>
                    <button type="submit" >Submit</button>
                </form>
                <Overview tasks={tasks} onClick={this.handleDelete}/>
            </div>
        )
    }

}
 
export default App;