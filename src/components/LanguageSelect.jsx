import styles from './LanguageSelect.module.scss'

import { IoLanguage } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const LanguageSelect = ({ isAlternative = false }) => {
    return (
        <div className={`${styles.languageSelect} ${isAlternative ? styles.alternative : ''}`}>
            <IoLanguage className={styles.languageIcon} />
            <select name="language" className={styles.select}>
                <option value="portuguese">Português</option>
                <option value="english">English</option>
            </select>
            <MdArrowDropDown />
        </div>
    )
}

export default LanguageSelect