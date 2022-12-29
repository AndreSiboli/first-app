import { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
// const { ref: myRef, inView, entry } = useInView(options)

import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'
import ScheduleForm from '../form/ScheduleForm'

//Images Imports
import girlBoxe from '../../images/home/girlBoxe.jpg'
import girlRunning from '../../images/home/girlRunning.jpg'
import girlRunning2 from '../../images/home/girlRunning2.jpg'
import girlFighting from '../../images/home/girlFighting.jpg'
import girlMMA from '../../images/home/girlMMA.jpg'
import girlPose from '../../images/home/girlPose.jpg'
import girlSuit from '../../images/home/girlSuit.jpg'

function Home(){
    const myRef = useRef()
    const [myElementVisible, setMyElementVisible] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    setMyElementVisible(entry.target)
                    observer.unobserve(entry.target)
                }
            })
        },{
            threshold: 0.5,
        })

        observer.observe(myRef.current)
    }, [])


    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.wrapperInfos}>

                    <div className={styles.wrapperTitle}>
                        <h1>TREINE NO SEU TEMPO.</h1>
                    </div>
            
                    <LinkButton link='/pricing' text='FAÇA PARTE DA NOSSA ACADEMIA' customClass='maxWidth'/>

                </div>
            </div>

            <section className={styles.mainSection}>
                <div className={styles.infosContainer}>
                        <h2 ref={myRef} className={`${myElementVisible ? `${styles.fade}` : ''}`}>SOMOS UMA ACADEMIA DE ALTA QUALIDADE, DEDICADA À SAÚDE E BEM-ESTAR ACESSÍVEIS.</h2>
                        <p>A Klipsan Fitness é uma academia para você frequentar do seu jeito, e fazer o seu melhor. Ao associar-se, você terá acesso a uma programação digital e presencial na academia para ajudá-lo a atingir seus objetivos de condicionamento físico. Veja abaixo todos os serviços oferecidos pela academia.</p>
                </div>

                <div className={styles.sectionPhotos}>
                    <div>
                        <img src={girlBoxe} alt=''/>
                    </div>
                    <div>
                        <img src={girlRunning} alt=''/>
                    </div>
                </div>

                <div className={styles.convenienceContainer}>
                    <h3>COMODIDADES</h3>
                    <p> Na Klipsan Fitness, sempre oferecemos novas comodidades para atender às necessidades dos nossos clientes. Você gostaria de adicionar algo à nossa lista? Envie uma sugestão.</p>
                    <div className={styles.convenienceList}>
                        <p className={styles.convenienceListF}>
                            Instalações modernas 
                            <br/>
                            •
                            <br/>
                            Aulas premium 
                            <br/>
                            •
                            <br/>
                            Personal trainers
                            <br/>
                            •
                            <br/>
                            Parede de escalada
                            <br/>
                            •
                            <br/>
                            Ringue de boxe
                        </p>
                        <p className={styles.convenienceListF}>
                            Sucos      
                            <br/>
                            •
                            <br/>
                            Nutrição pessoal
                            <br/>
                            •
                            <br/>
                            Passes mensais para convidados
                            <br/>
                            •
                            <br/>
                            Quadras de basquete
                            <br/>
                            •
                            <br/>
                            Armários
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.formularyContainer}>
                <div className={styles.formularySection}>
                    <div className={styles.scheduleAppoinment}>
                        <h3>AGENDAR UMA VISITA</h3>
                        <p>Faça um teste gratuito de 30 minutos em qualquer um dos nossos estabelecimentos para decidir se a Klipsan é a academia certa para você. Você poderá experimentar os equipamentos, observar as aulas e receber respostas diretas para todas as suas perguntas.
                        </p>
                    </div>
                
                    <ScheduleForm />
                </div>
            </section>

            <section className={styles.comentarySection}>
                <div className={styles.comentaryContainer}>
                    <h2>“A KLIPSAN FITNESS FOI FUNDAMENTAL PARA AJUDAR A MELHORAR MINHA RESISTÊNCIA PARA CORRER A MARATONA.”</h2>
                    <p>-Alejandro Jimenez</p>
                </div>
            </section>

            <section>
                <div className={styles.locationContainer}>
                    <div className={styles.locationWrapper}>
                        <h3>BROOKLYN</h3>
                        <p>
                            12834 Fitness Ln. <br></br>
                            Brooklyn, NY <br></br>
                            11385
                        </p>
                    </div>
                    <div className={styles.locationWrapper}>
                        <h3>LOS ANGELES</h3>
                        <p>
                            12834 Fitness Ln.<br></br>
                            Los Angeles, LA<br></br>
                            11385
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.albumSection}>
                <div className={styles.albumContainer}>
                    <div>
                        <img src={girlRunning2} alt='Imagem mulher correndo' />
                    </div>
                    <div>
                        <img src={girlFighting} alt='Imagem mulher lutando'/>
                    </div>
                    <div>
                        <img src={girlSuit} alt='Imagem mulher'/>
                    </div>
                    <div>
                        <img src={girlBoxe} alt='Imagem mulher lutando'/>
                    </div>
                    <div>
                        <img src={girlMMA} alt='Imagem luva de luta'/>
                    </div>
                    <div>
                        <img src={girlPose} alt='Imagem mulher lutando'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home