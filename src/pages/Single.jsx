import styles from './Single.module.scss'

import { useParams } from 'react-router-dom'

// Components
import AlternativeHeader from '../components/AlternativeHeader'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Single = () => {
    const { id } = useParams()

    return (
        <div className={styles.mainContainer}>
            <AlternativeHeader />
            <Banner />
            <Footer isAlternative={true} isDarkTheme={true} />
        </div>
    )
}

export default Single