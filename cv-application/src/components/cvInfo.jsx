import React, { Component } from 'react';
import Input from './InputComponents';

class CvInfo extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cv-info'>
                <div className='info general-info'>
                    <h2>General Information</h2>
                    <Input index="Full name"/>
                    <Input index="Phone Number"/>
                    <Input index="Email"/>
                    <Input index="Link"/>
                </div>
                <div className='info education-info'>
                    <h2>Educational Experience</h2>
                    <Input index="School name"/>
                    <Input index="major"/>
                    <Input index="date"/>
                </div>
                <div className='info experience-info'>
                    <h2>Experience</h2>
                    <Input index="Company Name"/>
                    <Input index="Position Title"/>
                    <Input index="main tasks"/>
                    <Input index="date"/>
                </div>

            </div>
        );
    }
}
 
export default CvInfo;