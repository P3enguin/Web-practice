import React from 'react';
import CvInfo from './CvInfo';
import CvResult from './CvResult';

function App() {
    const [vars,setValue] = React.useState({
        fullName: "",
        phone: "",
        email: "",
        link: "",
        schoolName: "",
        major: "",
        dateSchool: "",
        companyName: "",
        positionTitle: "",
        mainTask: "",
        dateWork: ""

    })


    return (
    <div className='main-container'>
        <CvResult vars={vars} setValue={setValue}/>
        <CvInfo vars={vars} setValue={setValue}/>
    </div>);
}
 
export default App;