import styles from './Browse.module.scss'

// Components
import AlternativeHeader from '../components/AlternativeHeader'
import BrowseContent from '../components/BrowseContent'
import SectionTitle from '../components/SectionTitle'
import Footer from '../components/Footer'

const Browse = () => {
    return (
        <div className={styles.mainContainer}>
            <AlternativeHeader />
            <SectionTitle />
            <BrowseContent />
            <Footer isAlternative={true} isDarkTheme={true}/>
        </div>
    )
}

export default Browse