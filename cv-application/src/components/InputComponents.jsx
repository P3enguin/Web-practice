

function Input(props) {

    return (<div className='input-field'>
        <form>
            <label>{props.index}</label>
            <input type="text"></input>
        </form>
    </div>
    );
}
 
export default Input;