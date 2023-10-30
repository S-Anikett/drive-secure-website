import styles from "./styles.module.css"
import playstore_svg from "../../assets/play_store.svg"
import mobile_img from "../../assets/mobile_img2.png"
import {BiLink} from "react-icons/bi"

const Home = () => {

    return (
        <div id="home" className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Welcome to <span className={styles.app_name}>DriveSecure</span><br />
                    <div className={styles.app_slogan}>
                    make your drive safe with us
                    </div>
                    <div className={styles.app_desc}>
                        Our cutting-edge mobile app is designed to detect driver drowsiness and prevent potential accidents on the road.
                    </div>
                    <div className={styles.button_desc}>You can download it from play store or with the link</div>
                </div>
                
                <div className={styles.button_div}>  
                    <a href="https://play.google.com/store/apps/details?id=com.projectcheck&pcampaignid=web_share" target="_blank" className={styles.button} rel="noreferrer"> <img height={20} src={playstore_svg} alt="playstore icon" /> Google Play</a>
                    <a href="https://drive.google.com/file/d/1A6DY9HP06iVI4b1iu-UIy_J7BayIRXX9/view?usp=drive_link" target="_blank" className={styles.button} rel="noreferrer"> <BiLink size={20} /> APK link</a>
                </div>
            </div>
            <div className={styles.mobile_png}>
                <img className={styles.mobile_image} src={mobile_img} alt="mobile_png" />
            </div>
        </div>
    )
}

export default Home