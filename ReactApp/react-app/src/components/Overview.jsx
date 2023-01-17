import React, { Component } from 'react';


class Overview extends Component {

 
    render(){
        const {tasks} = this.props;
        return (
            <ul>
                {tasks.map((task) =>{
                    return (
                        <li key={task.id}>
                        <button onClick={() => this.props.onClick(task.index)}> delete </button>
                        {task.index}- {task.text} 
                        </li>
                    )})}
            </ul>
        );
    }   
}
export default Overview;