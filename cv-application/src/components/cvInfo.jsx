import Input from './InputComponents';

function CvInfo(props) {
    let {vars} = props;
    return (
        <div className='cv-info'>
            <div className='info general-info'>
                <h2>General Information</h2>
                <Input index="Full name" content={vars.FullName} setChange={props.setValue}/>
                <Input index="Phone Number" content={vars.phone} setChange={props.setValue}/>
                <Input index="Email" content={vars.email} setChange={props.setValue}/>
                <Input index="Link" content={vars.link} setChange={props.setValue}/>
                <button>submit</button>
            </div>
            <div className='info education-info'>
                <h2>Educational Experience</h2>
                <Input index="School name" content={vars.schoolName} setChange={props.setValue}/>
                <Input index="major" content={vars.major} setChange={props.setValue}/>
                <Input index="date" content={vars.dateSchool} setChange={props.setValue}/>
                <button>submit</button>
            </div>
            <div className='info experience-info'>
                <h2>Experience</h2>
                <Input index="Company Name" content={vars.companyName} setChange={props.setValue}/>
                <Input index="Position Title" content={vars.positionTitle} setChange={props.setValue}/>
                <Input index="main tasks" content={vars.mainTask} setChange={props.setValue}/>
                <Input index="date" content={vars.dateWork} setChange={props.setValue}/>
                <button>submit</button>
            </div>

        </div>
    );
}
 
export default CvInfo;