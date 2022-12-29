import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaYoutube, FaCartPlus } from "react-icons/fa";

import LinkRedirect from '../layout/LinkRedirect'
import LinkImage from '../layout/LinkImage';

import Styles from './Navbar.module.css'

function Navbar(){

    const [active, setActive] = useState(false)

    const toggleMode = ()=>{
        setActive(!active)
     
        if(!active) {
            document.querySelector('.headerContainer a').style.color = 'black'
            document.querySelector('.cartContainer a').style.color = 'black'
            return
        }

        document.querySelector('.headerContainer a').style.color = '#fff'
        document.querySelector('.cartContainer a').style.color = '#fff'
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position === 0) document.querySelector('.headerContainer').style.backgroundColor = 'transparent'
        else document.querySelector('.headerContainer').style.backgroundColor = 'black'
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);  
    }, []);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(window.innerWidth >= 801 && active){
                toggleMode()
            }
        })
    }, [active])

    return(
        <header className={`${Styles.headerContainer} headerContainer`}>
            <Link to='/'>
                <h1 className={Styles.logo}>KLIPSAN</h1>
            </Link>

            <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
                <div className='hamburger'></div>
            </div>
            
            <div className={active ? 'menu menuOpen' : 'menu menuClosed'}>
                <nav className={`${Styles.mainLinks} mainLinks`}>
                    <div>
                        <LinkRedirect link='/sobre' text='Sobre'/>
                    </div>
                    <div>
                        <LinkRedirect link='/agenda' text='Agenda'/>
                    </div>
                    <div>
                        <LinkRedirect link='/contato' text='Contato'/>
                    </div>
                    <div>
                        <LinkRedirect link='/loja' text='Loja'/>
                    </div>
                </nav>

                <div className={`${Styles.endContainer} endContainer`}>
                    <LinkRedirect link='/login' text='Entrar' />
                    <div className={`${Styles.socialMediaContainer} socialMediaContainer`}>
                        <a href='https://instagram.com'><FaInstagram /></a>
                        <a href='https://youtube.com'><FaYoutube /></a>
                        <a href='https://facebook.com'><FaFacebookF /></a>
                        
                    </div>
                </div>
            </div>

            <div className={`${Styles.cartContainer} cartContainer`}>
                <LinkImage link='/cart' text='0' image={<FaCartPlus/>} />
            </div>
             
        </header>
    )
}

export default Navbar