import styles from './Landing.module.scss'

import { IoIosArrowForward } from "react-icons/io";

// Components
import Subscription from './Subscription';

const Landing = () => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <img src="/landing_background_image.jpg" alt="Background Image" />
                <div className={styles.backEffect}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.texts}>
                    <h1>Filmes, séries e muito mais, sem limites</h1>
                    <p>Assista onde quiser. Cancele quando quiser.</p>
                    <Subscription />
                </div>
            </div>
        </section>
    )
}

export default Landing