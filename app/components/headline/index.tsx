import styles from "./style.module.css"


interface HeadlineProps {
    text: string
  }
  
const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <h2 className={styles.h2}>{text}</h2>
  )
}
  
  export default Headline