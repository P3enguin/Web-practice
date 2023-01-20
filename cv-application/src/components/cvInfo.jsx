import Input from './InputComponents';

function CvInfo(props) {
    let {vars} = props;
    return (
        <div className='cv-info'>
            <div className='info general-info'>
                <h2>General Information</h2>
                <Input index="Full name" id="fullName"  content={vars.fullName} changeValue={props.changeValue}/>
                <Input index="Phone Number" id="phone" content={vars.phone} changeValue={props.changeValue}/>
                <Input index="Email" id="email" content={vars.email} changeValue={props.changeValue}/>
                <Input index="Link" id="link" content={vars.link} changeValue={props.changeValue}/>
                <button>submit</button>
            </div>
            <div className='info education-info'>
                <h2>Educational Experience</h2>
                <Input index="School name" id="schoolName" content={vars.schoolName} changeValue={props.changeValue}/>
                <Input index="major" id="major" content={vars.major} changeValue={props.changeValue}/>
                <Input index="date" id="dateSchool" content={vars.dateSchool} changeValue={props.changeValue}/>
                <button>submit</button>
            </div>
            <div className='info experience-info'>
                <h2>Experience</h2>
                <Input index="Company Name" id="companyName" content={vars.companyName} changeValue={props.changeValue}/>
                <Input index="Position Title" id="positionTitle" content={vars.positionTitle} changeValue={props.changeValue}/>
                <Input index="main tasks" id="mainTask" content={vars.mainTask} changeValue={props.changeValue}/>
                <Input index="date" id="dateWork" content={vars.dateWork} changeValue={props.changeValue}/>
                <button>submit</button>
            </div>

        </div>
    );
}
 
export default CvInfo;