import styles from './NotFoundSection.module.scss'

import { Link } from 'react-router-dom'

const NotFoundSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Lost your way?</h1>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link to="/">Netflix Home</Link>
                <div className={styles.error}>
                    <p>Error Code <span>NSES-404</span></p>
                </div>
            </div>
        </section>
    )
}

export default NotFoundSection