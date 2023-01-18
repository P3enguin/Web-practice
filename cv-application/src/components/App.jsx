import React, { Component } from 'react';
import CvInfo from './CvInfo';
import CvResult from './CvResult';

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