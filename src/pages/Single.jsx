import styles from './Single.module.scss'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Components
import AlternativeHeader from '../components/AlternativeHeader'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import api from '../services/api'

const Single = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [content, setContent] = useState([])

    useEffect(() => {
        async function loadContent() {
            const res = await api.get(`movie/${id}`, {
                params: {
                    api_key: "08c9b7ec6eb6d2d5f947cfab93ce221d",
                    language: "pt-BR",
                    page: 1,
                }
            }).then((r) => {
                setContent(r.data)
            }).catch(() => {
                console.log("Filme não encontrado!")
                navigate("/", { replace: true })
                return
            })
        }

        loadContent()

        return () => {
            console.log("Componente desmontado!")
        }
    }, [])

    return (
        <div className={styles.mainContainer}>
            <AlternativeHeader />
            <Banner content={content} />
            <Footer isAlternative={true} isDarkTheme={true} />
        </div>
    )
}

export default Single