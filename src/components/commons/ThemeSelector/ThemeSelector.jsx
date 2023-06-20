import React, { useContext } from "react";
import styles from './ThemeSelector.module.css'
import { ThemeContext } from "../../../infra/contexts/ThemeContext";


function ThemeSelector(){

    const {changeTheme} = useContext(ThemeContext)

    return(
        <section className={styles.themeSelector}>
            <select onChange={(event) =>changeTheme(event.target.value)} className="form-select" aria-label="Trocar tema do site">
                <option selected>Tema</option>
                <option value="summer">Summer</option>
                <option value="spring">Spring</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
            </select>
        </section>
    )
}

export default ThemeSelector