import { NavLink, Outlet, useParams } from 'react-router-dom';
import styles from './TodosLayout.module.css';
import {
  MdOutlineWatchLater,
  MdOutlineToday,
  MdOutlineInbox,
  MdOutlineMoreVert,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from 'react-icons/md';
import { useState } from 'react';

export default function TodosLayout() {
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav className={styles.navTodos}>
          <div className={`${styles.categories}`}>
            <NavLink
              to='projects/general'
              className={({ isActive }) =>
                [isActive ? styles.active : '', styles.sidebarLink].join(' ')
              }
            >
              <MdOutlineInbox className={styles.icon} />
              General
            </NavLink>
            <NavLink
              to='today'
              className={({ isActive }) =>
                [isActive ? styles.active : '', styles.sidebarLink].join(' ')
              }
            >
              <MdOutlineToday className={styles.icon} />
              Today
            </NavLink>
            <NavLink
              to='upcoming'
              className={({ isActive }) =>
                [isActive ? styles.active : '', styles.sidebarLink].join(' ')
              }
            >
              <MdOutlineWatchLater className={styles.icon} />
              Upcoming
            </NavLink>
          </div>
          <div className={styles.horizontalSeparator}></div>
          <div className={styles.categories}>
            <NavLink
              to='projects'
              end
              className={({ isActive }) =>
                [
                  isActive ? styles.active : '',
                  styles.sidebarLink,
                  styles.project,
                  styles.projectHeader,
                ].join(' ')
              }
            >
              Projects
              {projectsExpanded ? (
                <MdOutlineExpandLess className={styles.icon} />
              ) : (
                <MdOutlineExpandMore className={styles.icon} />
              )}
            </NavLink>
            <ProjectLink title='Proj1' />
            <ProjectLink title='Proj2' />
          </div>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}

function ProjectLink({ title }) {
  const params = useParams();
  const className = `${params.id === title && styles.active} ${
    styles.sidebarLink
  } ${styles.project}`;

  return (
    <div>
      <NavLink to={`projects/${title}`} className={className}>
        {title}
        <MdOutlineMoreVert className={styles.linkOptions} />
      </NavLink>
    </div>
  );
}
