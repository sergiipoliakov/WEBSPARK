
// Components
import { DatePicker } from 'antd';
import Logo from '@/components/Logo';

// Styles
import styles from './index.module.sass';


const statsMoch = [
  {
    label: 'posts',
    quantity: 870
  },
  {
    label: 'followers',
    quantity: 11.787
  },
  {
    label: 'following',
    quantity: 112
  }
]

const Header = () => {

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={`${styles.header__content}`}>
          <Logo />
          <div className={styles.header__info}>
            <div className={`${styles['header__info-title-wrapper']} fl fl--align-c fl--gap-16`}>
              <h2 className={styles.header__title}>
                monblanproject
              </h2>
              <div className={styles['header__start-on']}>
                Start on  17-02-2016
              </div>
            </div>
            <ul className={`${styles['header__stats-list']}`}>
              {
                statsMoch.map((el) => {
                  const { label, quantity } = el
                  return (
                    <li className={styles['header__stats']} key={label}>
                      {quantity} <span>{label}</span>
                    </li>
                  )
                })
              }
            </ul>
            <div className={`${styles['header__date-wrapper']}`}>
              <span>Date </span> <DatePicker placeholder='from' /> <DatePicker placeholder='to' />
            </div>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header