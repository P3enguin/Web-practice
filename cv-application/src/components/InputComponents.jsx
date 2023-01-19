
function Input(props) {

    return (<div className='input-field'>
        <form>
            <label>{props.index}</label>
            <input type="text" id={props.content} onChange={props.setValue} ></input>
        </form>
    </div>
    );
}
 
export default Input;