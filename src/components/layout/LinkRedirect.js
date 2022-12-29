import { Link } from 'react-router-dom'

import Styles from './LinkRedirect.module.css'

function LinkRedirect(props){

    const { text, link } = props

    return(
        <Link to={link} className={Styles.link}>{text}</Link>
    )
}

export default LinkRedirect