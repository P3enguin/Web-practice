import React, { Component } from 'react';


class Overview extends Component {

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <ul>
                {
                    this.props.tasks.map((task) =>{
                        return<li>{task}</li>
                    })
                }
            </ul>
        );
    }   
}
export default Overview;