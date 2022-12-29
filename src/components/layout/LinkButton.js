import { Link } from 'react-router-dom'

import Styles from './LinkButton.module.css'

function LinkButton(props){

    const { text, link, customClass } = props

    return(
        <div className={`${Styles.wrapperLinkButton} ${Styles[customClass]}`}>
            <Link to={link} className={Styles.linkButton}>{text}</Link>
        </div>
    )
}

export default LinkButton