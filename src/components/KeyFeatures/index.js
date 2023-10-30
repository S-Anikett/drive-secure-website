import FEATURES from "./get-key-features";
import styles from  "./styles.module.css"

const KeyFeatures = () => {
    return (
        <div id="features" className={styles.container}>
            <div className={styles.heading}>
                Key features
            </div>
            <div className={styles.features_container}>
                {FEATURES.map((item) => {
                    const {key, title, desc, icon: Icon} = item;
                    return(
                        <div key={key} className={styles.feature}>
                            <Icon size={40} />
                            <div className={styles.feature_title}>
                                {title}
                            </div>
                            <div className={styles.feature_desc}>
                                {desc}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default KeyFeatures