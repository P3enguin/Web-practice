import Input from './InputComponents';

function CvInfo() {
    return (
        <div className='cv-info'>
            <div className='info general-info'>
                <h2>General Information</h2>
                <Input index="Full name"/>
                <Input index="Phone Number"/>
                <Input index="Email"/>
                <Input index="Link"/>
                <button>submit</button>
            </div>
            <div className='info education-info'>
                <h2>Educational Experience</h2>
                <Input index="School name"/>
                <Input index="major"/>
                <Input index="date"/>
                <button>submit</button>
            </div>
            <div className='info experience-info'>
                <h2>Experience</h2>
                <Input index="Company Name"/>
                <Input index="Position Title"/>
                <Input index="main tasks"/>
                <Input index="date"/>
                <button>submit</button>
            </div>

        </div>
    );
}
 
export default CvInfo;