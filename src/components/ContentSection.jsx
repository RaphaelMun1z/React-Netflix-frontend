import styles from './ContentSection.module.scss'

const ContentSection = ({ title, subtitle, image, isAlternative = false }) => {
    return (
        <section className={styles.container}>
            <div className={`${styles.content} ${isAlternative ? styles.alternative : ''}`}>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className={styles.image}>
                    <img src={image} alt="Image" />
                </div>
            </div>
        </section>
    )
}

export default ContentSection