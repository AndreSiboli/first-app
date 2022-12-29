import Styles from './Message.module.css'

function Message(props){
    const { text, type } = props

    return(
        <div className={`${Styles[type]} ${Styles.message}`}>
            <p>{text}</p>
        </div>
    )
}

export default Message