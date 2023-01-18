
function CvResult() {
    return (<div className='cv-result container'>

            <div className="result pic">
                <img src="" alt="profile-pic" 
                className="result profile-result"></img>
            </div>
            <div className="result general-result">
                <p>Full name</p>
                <p>phone</p>
                <p>email</p>
                <p>link</p>
            </div>
            <div className="result study-result">
                <p>school Name</p>
                <p>major</p>
                <p>data</p>
            </div>
            <div className="result work-result">
                <p>Company name</p>
                <p>Position Title</p>
                <p>main task</p>
                <p>data</p>
            </div>
        </div>
    );
}
 
export default CvResult;