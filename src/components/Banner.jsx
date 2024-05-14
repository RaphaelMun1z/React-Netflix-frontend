import { Link } from 'react-router-dom'
import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.itemData}>
                        <img className={styles.image} src="https://occ-0-1837-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfq9J_i7czLRDTMSZr-HTqflyWJIQwiBPqc1F5qPGUiegLbkDlw0wwQ3MK8bN4ei4YqJUzXZzR2sdBds2dMaoOmex6VcHptCS0NVQA-RfMLt-WgjTIbwkpOHCb3jHyOEZtKxXWPOntTTlhryQaB-1Fg13Qg4_gOdW1SSF1J_ENMl4HmsjxQ5fw.png?r=53c" alt="Title image" />
                        <p className={styles.title}>La casa de papel</p>
                        <p className={styles.generalInfo}>2017 | <span>A16</span> | 5 temporadas | Suspense</p>
                        <p className={styles.description}>Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?</p>
                        <div className={styles.extraInfo}>
                            <p><span>Estrelando:</span>Úrsula Corberó,Álvaro Morte,Itziar Ituño</p>
                            <p><span>Criação:</span>Álex Pina</p>
                        </div>
                    </div>
                    <div className={styles.itemImage}>
                        <div className={styles.imageContainer}></div>
                    </div>
                </div>
                <div className={styles.watch}>
                    <div className={styles.content}>
                        <svg class="value-prop-logo" focusable="false" viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo"><defs><radialGradient id="7951a9d3-09a8-4017-a891-23783883e4d0-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#7951a9d3-09a8-4017-a891-23783883e4d0-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>
                        <p>Assista o quanto quiser.</p>
                    </div>
                    <div className={styles.actions}>
                        <Link to="/">ASSINE A NETFLIX</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner