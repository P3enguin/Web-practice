import React, { Component } from 'react';
import CvInfo from './cvInfo';
import CvResult from './cvResult';

class App extends Component {
    state = {  } 
    render() { 
        return (
        <div className='main-container'>
            <CvResult />
            <CvInfo />
        </div>);
    }
}
 
export default App;