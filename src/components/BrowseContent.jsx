import styles from './BrowseContent.module.scss'

import { useState, useEffect } from 'react'
import api from '../services/api'

// Components
import { Link } from 'react-router-dom'
import ContentTopicSlider from './ContentTopicSlider'

const BrowseContent = () => {
  const [newContent, setNewContent] = useState([])
  const [popularContent, setPopularContent] = useState([])
  const [topRatedContent, setTopRatedContent] = useState([])
  const [upcomingContent, setUpcomingContent] = useState([])

  useEffect(() => {
    async function loadNewContent() {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
          language: "pt-BR",
          page: 1,
        }
      })

      setNewContent(res.data.results.slice(0, 10))
    }

    async function loadPopularContent() {
      const res = await api.get("movie/popular", {
        params: {
          api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
          language: "pt-BR",
          page: 1,
        }
      })

      setPopularContent(res.data.results.slice(0, 10))
    }

    async function loadTopRatedContent() {
      const res = await api.get("movie/top_rated", {
        params: {
          api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
          language: "pt-BR",
          page: 1,
        }
      })

      setTopRatedContent(res.data.results.slice(0, 10))
    }

    async function loadUpcomingContent() {
      const res = await api.get("movie/upcoming", {
        params: {
          api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
          language: "pt-BR",
          page: 1,
        }
      })

      setUpcomingContent(res.data.results.slice(0, 10))
    }

    loadNewContent()
    loadPopularContent()
    loadTopRatedContent()
    loadUpcomingContent()

    return () => {
      console.log("Componente desmontado!")
    }
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.contentSection}>
        <ContentTopicSlider title="Assista em um fim de semana" content={popularContent} />
        <ContentTopicSlider title="Novidades na Netflix" content={newContent} />
        <ContentTopicSlider title="Filmes aclamados pela crítica" content={topRatedContent} />
        <ContentTopicSlider title="Descubra suas próximas histórias" content={upcomingContent} />
        <ContentTopicSlider title="Descubra suas próximas histórias" content={popularContent} embassy={true} />
        <ContentTopicSlider title="Descubra suas próximas histórias" content={topRatedContent} embassy={true} />
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