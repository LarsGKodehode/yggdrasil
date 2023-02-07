import styles from './Dropdown.module.css';

/* eslint-disable-next-line */
export interface DropdownProps {}

export function Dropdown(props: DropdownProps) {
  return (
    <div className={styles['container']}>
      <h1>Dropdown!</h1>
    </div>
  );
}
