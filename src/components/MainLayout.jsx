import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link to='/' className={styles.logo}>
          Logo
        </Link>
        <nav className={styles.navigation}>
          <NavLink
            to='todos'
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].join(' ')
            }
          >
            Todos
          </NavLink>
          <NavLink
            to='habits'
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].join(' ')
            }
          >
            Habits
          </NavLink>
          <NavLink
            to='tracker'
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ''].join(' ')
            }
          >
            Time tracker
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <span>Productivity by Ahmed Agić</span>
      </footer>
    </div>
  );
}
