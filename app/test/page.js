import styles from "./Test.module.scss";

const testPage = () => {
 return (
  <div className={styles.test}>
   <section className={styles.showcase}>
    <article className={styles.showcase__block}>1</article>
    <article className={styles.showcase__block}>2</article>
    <article className={styles.showcase__block}>3</article>
   </section>
  </div>
 );
};
export default testPage;
