import styles from './BrowseContent.module.scss'

import { useState, useEffect } from 'react'
import api from '../services/api'

// Components
import { Link } from 'react-router-dom'
import ContentTopicSlider from './ContentTopicSlider'

const BrowseContent = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    async function loadContent() {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
          language: "pt-BR",
          page: 1,
        }
      })

      setContent(res.data.results.slice(0, 10))
    }

    loadContent()

    return () => {
      console.log("Componente desmontado!")
    }
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.contentSection}>
        <ContentTopicSlider title="Novidades na Netflix" content={content} />
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