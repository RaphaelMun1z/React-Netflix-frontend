import styles from './Faq.module.scss'

// Components
import Subscription from '../components/Subscription'

const Faq = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2>Perguntas frequentes</h2>
                <div className={styles.questions}>
                    <ul>
                        <li>
                            <h3>
                                <button>
                                    <span>O que é a Netflix?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <button>
                                    <span>Quanto custa a Netflix?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <button>
                                    <span>Onde posso assistir?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <button>
                                    <span>Como faço para cancelar?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <button>
                                    <span>O que eu posso assistir na Netflix?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <button>
                                    <span>A Netflix é adequada para crianças?</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className={styles.subscriptionContainer}>
                    <Subscription />
                </div>
            </div>
        </section>
    )
}

export default Faq