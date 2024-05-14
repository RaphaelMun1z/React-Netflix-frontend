import styles from './BrowseContent.module.scss'

// Components
import { Link } from 'react-router-dom'
import ContentTopicSlider from './ContentTopicSlider'

const BrowseContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentSection}>
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider />
        <ContentTopicSlider embassy={true} />
        <ContentTopicSlider embassy={true} />
      </div>
      <div className={styles.advertaismentMessage}>
        <div className={styles.content}>
          <h2>Tem muito mais esperando por você.</h2>
          <p>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
          <Link to="/">ASSINE A NETFLIX</Link>
        </div>
      </div>
      <p className={styles.extraInfo}>Leia sobre as séries e filmes da Netflix e assista a vídeos extras no Tudum.com.</p>
    </section>
  )
}

export default BrowseContent