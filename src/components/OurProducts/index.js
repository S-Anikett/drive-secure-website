import styles from "./styles.module.css"
import PRODUCTS from "./get-product-list"
import { BiLink } from "react-icons/bi";
import playstore_svg from "../../assets/play_store.svg"

const OurProducts = () => {
    return (
        <div id="our_products" className={styles.container}>
            <div className={styles.heading}>
                Our Products
            </div>
            <div className={styles.card_container}>
                {PRODUCTS.map((item) => {
                    const {key, title, icon, desc, playstore_link, apk_link} = item;
                    return (
                        <div key={key} className={styles.card}>
                            <div className={styles.card__header}> <img className={styles.card__header_logo} width={20} src={icon} alt={key} /> {title}</div>
                            <div className={styles.card__desc}>{desc}</div>
                            <div className={styles.card__button_container}>
                            <a href={`${playstore_link}`} target="_blank" className={styles.button} rel="noreferrer"> <img height={20} src={playstore_svg} alt="playstore icon" /> Google Play</a>
                            <a href={`${apk_link}`} target="_blank" className={styles.button} rel="noreferrer"> <BiLink size={20} /> APK link</a></div>
                        </div>
                    )
                })}
                <div>

                </div>
            </div>
        </div>
    )
}

export default OurProducts