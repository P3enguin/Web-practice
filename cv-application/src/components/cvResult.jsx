import React from "react";
import Input from "./InputComponents";
import CvInfo from "./CvInfo";

function CvResult() {
    const [state,setValue] = React.useState({
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

    return (<div className='cv-result container'>
            <div className="result pic">
                <img src="" alt="profile-pic" 
                className="result profile-result"></img>
            </div>
            <div className="result general-result">
                <p>{state.fullName}</p>
                <p>{state.phone}</p>
                <p>{state.email}</p>
                <p>{state.link}</p>
            </div>
            <div className="result study-result">
                <p>{state.schoolName}</p>
                <p>{state.major}</p>
                <p>{state.dateSchool}</p>
            </div>
            <div className="result work-result">
                <p>{state.companyName}</p>
                <p>{state.positionTitle}</p>
                <p>{state.mainTask}</p>
                <p>{state.dateWork}</p>
            </div>
        </div>
    );
}
 
export default CvResult;