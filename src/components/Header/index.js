import styles from "./styles.module.css"
import logo from "../../logo.png"
import NAVIGATIONS from "./navigations"
import { BrowserRouter } from "react-router-dom"
import { useState } from "react"

const Header = () => {

    const [active, setActive] = useState("#home")

    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.logo_title}>
                    DriveSecure
                </div>
            </div>
            <BrowserRouter>
            <div className={styles.navigation_container}>
                {NAVIGATIONS.map((item) => {
                    const {key, title, href} = item;
                    return (
                        <a href={href} key={key} onClick={() => setActive(href)} className={`${styles.nav_item} ${active === href && styles.nav_item_active}`}>
                            {title}
                        </a>
                    )
                })}
            </div>
            </BrowserRouter>
        </div>
    )
}

export default Header