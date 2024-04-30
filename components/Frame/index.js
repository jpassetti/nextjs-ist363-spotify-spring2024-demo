import styles from "./Frame.module.scss";

const Frame = ({ children }) => {
 return <div className={styles.frame}>{children}</div>;
};
export default Frame;
