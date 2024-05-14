import styles from './Banner.module.scss'

import { Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react'

const Banner = ({ content }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (content) {
            setLoading(false)
        }
    }, [content])

    const getYear = (date) => {
        const dataObj = new Date(date);

        return dataObj.getFullYear();
    }

    if (loading) {
        return (
            <p>Carregando...</p>
        )
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.itemData}>
                        <p className={styles.title}>{content.title}</p>
                        <p className={styles.generalInfo}>{getYear(content.release_date)} | <span>{content.adult ? (<>A18</>) : (<>AL</>)}</span> | {content.runtime}min {content.season_number && (<>| {season_number} temporadas</>)} {content.genres && content.genres.map((genre, index) => (<React.Fragment key={index}>| {genre.name} </React.Fragment>))}</p>
                        <p className={styles.description}>{content.overview}</p>
                        <div className={styles.extraInfo}>
                            <p><span>Criação:</span>{content.production_companies && content.production_companies.map((prod, index) => (<React.Fragment key={index}>{index !== 0 && (<>, </>)}{prod.name}</React.Fragment>))}.</p>
                            <p><span>Avaliação:</span>{content.vote_average}</p>
                        </div>
                    </div>
                    <div className={styles.itemImage}>
                        <div className={styles.imageContainer} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${content.backdrop_path}')` }}></div>
                    </div>
                </div>
                <div className={styles.watch}>
                    <div className={styles.content}>
                        <svg class="value-prop-logo" focusable="false" viewBox="225 0 552 1000" aria-hidden="true" data-uia="n-logo"><defs><radialGradient id="7951a9d3-09a8-4017-a891-23783883e4d0-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#7951a9d3-09a8-4017-a891-23783883e4d0-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>
                        <p>Assista o quanto quiser.</p>
                    </div>
                    <div className={styles.actions}>
                        <Link to="/">ASSINE A NETFLIX</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner