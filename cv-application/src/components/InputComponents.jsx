import React, { Component } from 'react';

class Input extends Component {
    state = { } 
    render(props) { 
        return (<div className='input-field'>
            <form>
                <label>{this.props.index}</label>
                <input type="text"></input>
                <button>submit</button>
            </form>
        </div>);
    }
}
 
export default Input;