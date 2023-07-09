import styles from './TodosLoading.module.css';

export default function TodosLoading() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<div key={i} className={styles.item}></div>);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.itemsContainer}>
        <div className={styles.items}>{items}</div>
      </div>
    </div>
  );
}
