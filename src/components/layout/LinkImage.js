import { Link } from 'react-router-dom'

import Styles from './LinkImage.module.css'

function LinkImage(props){

    const { text, link, image} = props

    return(
        <Link to={link} className={Styles.linkImage}>{image}<span>{text}</span></Link>
    )
}

export default LinkImage