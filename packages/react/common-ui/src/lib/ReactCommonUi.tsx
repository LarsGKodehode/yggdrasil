import styles from './ReactCommonUi.module.css';

/* eslint-disable-next-line */
export interface ReactCommonUiProps {}

export function ReactCommonUi(props: ReactCommonUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactCommonUi!</h1>
    </div>
  );
}

export default ReactCommonUi;
