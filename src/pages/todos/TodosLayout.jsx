import { Navigate, Outlet } from 'react-router-dom';
import styles from './TodosLayout.module.css';

import TodosSidebar from './TodosSidebar';

export default function TodosLayout() {
  return (
    <>
      <Navigate to='today' />
      <div className={styles.container}>
        <TodosSidebar />

        <section className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}
