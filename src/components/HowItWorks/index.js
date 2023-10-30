import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import CAROUSSEL_ITEMS from "./get-caroussel-items"
import styles from "./styles.module.css"

const Card = ({ item = {} }) => {

    const { title, desc, src } = item

    return (
        <div className={styles.card_container}>
            <div className={styles.img_div}>
            <img width="40%" height="auto" src={src} alt={title} />
            </div>
            <div className={styles.instruction_div}>
                <h1>{title}</h1>
                <div className={styles.desc}>
                {desc}
                </div>
            </div>
        </div>
    )
};

export default function HowItWorks() {
  return (
    <div id="how_it_works" className={styles.container}>
      <div className={styles.heading}>How it works?</div>
      <ReactCaroussel slidesToShow={1} slidesToScroll={1} infinite={true} display={{
          dots: true,
          arrows: true
        }}>
        {CAROUSSEL_ITEMS.map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </ReactCaroussel>

      {/* <ReactCaroussel
        infinite={true}
        autoplay={true}
        speed={2} // 2s
        display={{
          dots: true,
          arrows: false
        }}
      >
        <Card />
        <Card />
        <Card />
      </ReactCaroussel> */}
    </div>
  );
}
