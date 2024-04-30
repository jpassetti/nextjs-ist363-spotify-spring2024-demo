import styles from "./ImageSlider.module.scss";

const ImageSlider = ({ artists, activeIndex }) => {
 return (
  <div className={styles.imageSlider}>
   <ul
    className={styles.imageSlider__list}
    style={{
     width: `${artists.length * 100}%`,
     transform: `translateX(-${activeIndex * (100 / artists.length)}%)`,
    }}
   >
    {artists.map((image, index) => (
     <li key={index} className={styles.imageSlider__list__item}>
      {image.name}
     </li>
    ))}
   </ul>
  </div>
 );
};
export default ImageSlider;
