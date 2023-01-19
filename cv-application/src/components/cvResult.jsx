import React from "react";
import Input from "./InputComponents";
import CvInfo from "./CvInfo";

function CvResult(props) {

    let {vars} = props;
    return (<div className='cv-result container'>
            <div className="result pic">
                <img src="" alt="profile-pic" 
                className="result profile-result"></img>
            </div>
            <div className="result general-result">
                <p>{vars.fullName}</p>
                <p>{vars.phone}</p>
                <p>{vars.email}</p>
                <p>{vars.link}</p>
            </div>
            <div className="result study-result">
                <p>{vars.schoolName}</p>
                <p>{vars.major}</p>
                <p>{vars.dateSchool}</p>
            </div>
            <div className="result work-result">
                <p>{vars.companyName}</p>
                <p>{vars.positionTitle}</p>
                <p>{vars.mainTask}</p>
                <p>{vars.dateWork}</p>
            </div>
        </div>
    );
}
 
export default CvResult;