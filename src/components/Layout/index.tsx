// Components
import Header from '@/components/Header';
import ViewButton from '@/components/ViewButton'
import LoadMoreButton from '@/components/LoadMoreButton';


// Styles
import styles from './index.module.sass'
import CardList from '@/components/CardList';
import { useState } from 'react';

import data from '@/data/mochData.json'

const ITEMS_PER_PAGE = 4

const Layout = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1)
  const visibleItems = data.items.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = visibleItems.length < data.items.length;

  return (
    <main className={styles.layout}>
      <Header />
      <div className={`${styles.layout__content} container`}>
        <ViewButton value={view} onChange={setView} />
        <CardList view={view} items={visibleItems} />
        {hasMore && (
          <LoadMoreButton onClick={() => setPage(prev => prev + 1)} />
        )}
      </div>
    </main>
  )
}

export default Layout