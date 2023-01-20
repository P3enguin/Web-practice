
function Input(props) {
    return (<div className='input-field'>
        <form>
            <label>{props.index}</label>
            <input type="text" id={props.id} onChange={(e) => props.changeValue(props.id,e.target.value)}></input>
        </form>
    </div>
    );
}
 
export default Input;