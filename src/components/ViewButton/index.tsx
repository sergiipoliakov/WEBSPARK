
// Icons
import SvgViewGrid from '@/components/IconLibrary/SvgViewGrid';
import SvgViewList from '@/components/IconLibrary/SvgViewList';

// Styles
import styles from './index.module.sass';

interface IProps {
  value: string;
  onChange: (value: 'list' | 'grid') => void
}

const ViewButton = (props: IProps) => {
  const { onChange, value } = props;

  const onHandleChange = (value: 'list' | 'grid') => {
    onChange(value)
  }
  return (
    <div className={styles.button}>
      <span className={`${styles['button__icon-wrapper']} ${value === 'grid' ? styles['button__icon-wrapper--active'] : ''}`} onClick={() => onHandleChange('grid')}>
        <SvgViewGrid />

      </span>
      <span className={`${styles['button__icon-wrapper']}  ${value === 'list' ? styles['button__icon-wrapper--active'] : ''}`} onClick={() => onHandleChange('list')}>
        <SvgViewList />

      </span>
    </div>
  )
}

export default ViewButton