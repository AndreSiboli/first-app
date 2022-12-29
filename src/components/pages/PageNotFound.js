import Styles from './PageNotFound.module.css'

function PageNotFound(){
    return(
        <div className={Styles.nFContainer}>
            <div className={Styles.nFWrapper}>
                <h1>Página não encontrada</h1>
                <p>Essa página possivelmente está em construção. Por ser um projeto de teste, poderá demorar</p>
            </div>
        </div>
    )
}

export default PageNotFound