import styles from './Subscription.module.scss'

import { IoIosArrowForward } from "react-icons/io";

const Subscription = () => {
    return (
        <div className={styles.form}>
            <form>
                <p className={styles.alternativeText}>Tudo pronto para assistir? Informe seu email ou número de celular para criar ou reiniciar sua assinatura.</p>
                <div className={styles.inputContainer}>
                    <div className={styles.inputText}>
                        <label htmlFor="">Email ou número de celular</label>
                        <input type="text" placeholder='Email ou número de celular' />
                    </div>
                    <button className={styles.submitButton}>Vamos lá<IoIosArrowForward /></button>
                </div>
            </form>
        </div>
    )
}

export default Subscription