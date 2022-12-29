import Styles from './Input.module.css'

function InputNumber(props){
    const { id, type, maxLength, handleSetValue } = props

    const getValue = (e)=>{
        handleSetValue(e)
    }

    function onlyNumber(e){
        let newValue = ''

        for(let i=0; i<e.target.value.length; i++){
            if(!isNaN(e.target.value[i]) && e.target.value[i] !== ' ')  newValue += e.target.value[i]
        }

        e.target.value = newValue
    }

    return(
        <input name={id} id={id} type={type} maxLength={maxLength} className={Styles.input} onChange={(e)=>{ 
            onlyNumber(e)
            getValue(e)
        }}/>
    )
}

export default InputNumber