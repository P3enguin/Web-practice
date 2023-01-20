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

    function changeValue(id,value) {
        setValue({...vars,[id]: value});
    };

    return (
    <div className='main-container'>
        <CvResult vars={vars} changeValue={changeValue}/>
        <CvInfo vars={vars} changeValue={changeValue}/>
    </div>);
}
 
export default App;