import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
