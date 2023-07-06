import { Outlet } from 'react-router-dom';
import styles from './TodosLayout.module.css';

import TodosSidebar from './TodosSidebar';

export default function TodosLayout() {
  return (
    <div className={styles.container}>
      <TodosSidebar />

      <section>
        <Outlet />
      </section>
    </div>
  );
}
