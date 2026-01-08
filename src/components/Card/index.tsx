import SvgHeart from '@/components/IconLibrary/SvgHeart';
import SvgComment from '@/components/IconLibrary/SvgComment';
import styles from './index.module.sass'
import type { Stats } from '@/types/data';

interface IProps {
  preview?: string;
  title?: string;
  view?: string;
  stats: Stats;
  statsToday: Stats
}

const Card = (props: IProps) => {
  const { 
    title = 'Cloudy sky at sunset', 
    preview,
    view = 'grid',
    stats,
    statsToday
  } = props;
  const {href} = location 

  return (
    <div className={`${styles.card} ${styles[`card--${view}`]}`}>
      <div className={`${styles['card__img-wrapper']} ${styles[`card__img-wrapper--${view}`]}`}>
        <img className={styles['card__img']} src={`${href}/images/${preview}`} alt={title} />
      </div>
      <div className={`${styles['card__stats-wrapper']} ${styles[`card__stats-wrapper--${view}`]}`}>
        <div>
          <p className={styles.card__title}>
            Today
          </p>
          <div className={`${styles.card__stats} ${styles[`card__stats--${view}`]} `}>
            <div className="fl fl--align-c fl--gap-6">
              <SvgHeart /> <span>{statsToday?.likes}</span>
            </div>
            <div className="fl fl--align-c fl--gap-6">
              <SvgComment /> <span>{statsToday?.comments}</span>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.card__title}>
            9-08-2016
          </p>
          <div className={`${styles.card__stats} ${styles[`card__stats--${view}`]} `}>
            <div className="fl fl--align-c fl--gap-6">
              <SvgHeart /> <span>{stats?.likes}</span>
            </div>
            <div className="fl fl--align-c fl--gap-6">
              <SvgComment /> <span>{stats?.comments}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.card__footer} ${styles[`card__footer--${view}`]}`}>
        <p>
          Image upload
        </p>
        <p className={styles['card__footer-date']}>
          11-04-2016
        </p>

      </div>
      
      
    </div>
  )
}

export default Card