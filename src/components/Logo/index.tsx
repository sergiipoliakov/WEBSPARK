import logoImg from '@/assets/logo.svg'

// Styles
import styles from './index.module.sass'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__img} src={logoImg} alt="logo"  />
    </div>
  )
}

export default Logo