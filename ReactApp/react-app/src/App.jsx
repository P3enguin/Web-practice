import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.onClickBtn() = this.onClickBtn.bind(this);
        this.state = {value: ''};

    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    // onClickBtn() {
    //     console.log("clicked");
    // }


    render() { 
        return (<form>
                <label>
                    Tasks:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
          </form>);
    }
}
 
export default App;