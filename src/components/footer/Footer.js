import Styles from './Footer.module.css'

import Input from '../input/Input'
import ButtonSubmit from '../input/ButtonSubmit'
import LinkRedirect from '../layout/LinkRedirect'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div className={Styles.signUpContainer}>
                <div className={Styles.signUpParagraph}>
                    <h2>FIQUE POR DENTRO</h2>
                    <p>Cadastre-se e seja o primeiro a saber sobre novas aulas, comodidades e mais. Respeitamos sua privacidade e nunca compartilharemos suas informações com fornecedores externos.</p>
                </div>
                <div className={Styles.signUpInputContainer}>
                    <div className={Styles.signUpInput}>
                        <Input type='text' id='signUpFooter'/>
                    </div>
                    <div className={Styles.signUpButton}>
                        <ButtonSubmit text='Cadastre-se' id='signUpButton' customClass='buttonSubmitWhite'/>
                    </div>
                </div>
            </div>

            <div className={Styles.contactContainer}>
                <div className={Styles.contactWrapper}>
                    <div className={Styles.supportContainer}>
                        <h3>Suporte</h3>
                        <div className={Styles.supportLinks}>
                            <LinkRedirect link='#' text='Termos e Condições'/>
                            <LinkRedirect link='#' text='Política de Privacidade '/>
                            <LinkRedirect link='#' text='Perguntas Frequentes'/>
                        </div>
                    </div>

                    <div>
                        <h3>CONTATO</h3>
                        <div>
                            <p>
                                email@exemplo.com<br></br>
                                1+(555)-555-5555
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.contactLogoContainer}>
                    <h2>KLIPSAN</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer