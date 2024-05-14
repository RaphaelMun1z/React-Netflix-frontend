import styles from './Footer.module.scss'

// Components
import LanguageSelect from './LanguageSelect';

const Footer = ({ isAlternative = false, isDarkTheme = false }) => {
    return (
        <footer className={`${isAlternative ? styles.alternative : ''}`}>
            <div className={styles.footerNavigation}>
                <p>Dúvidas? Ligue <span>0800 591 2876</span></p>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Central de Ajuda</li>
                    <li>Conta</li>
                    <li>Media Center</li>
                    <li>Relações com investidores</li>
                    <li>Carreiras</li>
                    <li>Resgatar cartão pré-pago</li>
                    <li>Comprar cartão pré-pago</li>
                    <li>Formas de assistir</li>
                    <li>Termos de Uso</li>
                    <li>Privacidade</li>
                    <li>Preferências de cookies</li>
                    <li>Informações corporativas</li>
                    <li>Entre em contato</li>
                    <li>Teste de velocidade</li>
                    <li>Avisos legais</li>
                    <li>Só na Netflix</li>
                </ul>
                <LanguageSelect isAlternative={true} isDarkTheme={isDarkTheme}/>
                <p className={styles.copyright}>Netflix Brasil</p>
            </div>
        </footer>
    )
}

export default Footer