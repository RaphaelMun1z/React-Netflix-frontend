import { useEffect, useState } from 'react';

import styles from './ContentTopicSlider.module.scss'

import { IoIosArrowForward } from "react-icons/io";

import { Link } from 'react-router-dom';

const ContentTopicSlider = ({ title, content = [], embassy = false }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (content) {
            setLoading(false)
        }
    }, [content])

    if (loading) {
        return (
            <div className={`${styles.contentSliderContainer} ${embassy ? styles.embassy : ''}`}>
                <p>{title}</p>
                <div className={styles.slider}>
                    <ul>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                        <div className={styles.contentLoading}></div>
                    </ul>
                    <div className={styles.nextButton}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.contentSliderContainer} ${embassy ? styles.embassy : ''}`}>
            <p>{title}</p>
            <div className={styles.slider}>
                <ul>
                    {content.map((item) => (
                        <Link to={`/title/${item.id}`} key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="Banner" />
                            <p>{item.title}</p>
                        </Link>
                    ))}
                </ul>
                <div className={styles.nextButton}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default ContentTopicSlider