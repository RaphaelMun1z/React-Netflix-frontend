import styles from './SectionTitle.module.scss'

const SectionTitle = () => {
    return (
        <div className={styles.sectionTitle}>
            <div className={styles.content}>
                <h1>Só na Netflix</h1>
                <p>Na Netflix você acha conteúdo original incrível, que não pode ser encontrado em nenhum outro lugar. Filmes, séries, especiais... Todos feitos especialmente para você!</p>
            </div>
        </div>
    )
}

export default SectionTitle