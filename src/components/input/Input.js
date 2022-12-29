import Styles from './Input.module.css'

function Input(props){
    const { id, type, maxLength, handleSetValue } = props

    const getValue = (e)=>{
        handleSetValue(e)
    }

    return(
        <input name={id} id={id} type={type} maxLength={maxLength} className={Styles.input} onChange={(e)=>getValue(e)}/>
    )
}

export default Input