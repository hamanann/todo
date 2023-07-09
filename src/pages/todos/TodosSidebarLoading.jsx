import styles from './TodosSidebarLoading.module.css';

export default function TodosSidebarLoading() {
  const n = 7;
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push(<div key={i} className={styles.project}></div>);
  }
  return <div className={styles.container}>{list}</div>;
}
