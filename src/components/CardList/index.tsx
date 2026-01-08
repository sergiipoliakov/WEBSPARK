
// Components
import Card from '@/components/Card';

// Types
import type { FeedItem } from '@/types/data';
import type { IView } from '@/types/view.types';

// Styles
import styles from './index.module.sass';

interface IProps {
  view: IView;
  items: FeedItem[]
}

const CardList = (props: IProps) => {
  const { 
    view = 'grid',
    items
   } = props;

  return (
    <div className={`${styles.list} ${styles[`list--${view}`]}`}>
      {
        items?.map((el) => {
          const { image, id, stats, statsToday} = el
          return (
            <Card 
              key={id}
              view={view} 
              preview={image.url}
              stats={stats}
              statsToday={statsToday}
            />
          )
        })
      }
    </div>
  )
}

export default CardList