import styles from './index.module.sass'

const LoadMoreButton = ({onClick}: {onClick: () => void}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      LOAD MORE
    </button>
  )
}

export default LoadMoreButton