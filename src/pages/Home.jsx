import React from 'react'

// Components
import Header from '../components/Header'
import Landing from '../components/Landing'
import Advertisement from '../components/Advertisement'
import ContentSection from '../components/ContentSection'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Advertisement />
      <ContentSection title="Aproveite na TV" subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
      <ContentSection title="Assista onde quiser" subtitle="Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" isAlternative={true} />
      <ContentSection title="Crie perfis para crianças" subtitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso." image="https://occ-0-1837-1567.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190" />
      <ContentSection title="Baixe séries para assistir offline" subtitle="Assista em um avião, trem ou submarino..." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" isAlternative={true} />
      <Faq />
      <Footer />
    </>
  )
}

export default Home