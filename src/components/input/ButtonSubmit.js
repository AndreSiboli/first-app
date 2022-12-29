import Styles from './ButtonSubmit.module.css'

function ButtonSubmit(props){
    const {id, text, handleSubmit, customClass} = props

    const submitFunction = (e)=>{
        e.preventDefault()
        handleSubmit()
    }

    return(
        <button 
            className={`${Styles[customClass]} ${Styles.buttonSubmit}`}
            onClick={(e)=>submitFunction(e)}
        >
            {text}
        </button>
    )
}

export default ButtonSubmit