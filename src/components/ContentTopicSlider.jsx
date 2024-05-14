import styles from './ContentTopicSlider.module.scss'

import { IoIosArrowForward } from "react-icons/io";

const ContentTopicSlider = ({ embassy = false }) => {
    return (
        <div className={`${styles.contentSliderContainer} ${embassy ? styles.embassy : ''}`}>
            <p>Descubra suas próximas histórias</p>
            <div className={styles.slider}>
                <ul>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                    <li>
                        <img src="/movie_banner.png" alt="Banner" />
                        <p>Nome do Filme</p>
                    </li>
                </ul>
                <div className={styles.nextButton}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default ContentTopicSlider