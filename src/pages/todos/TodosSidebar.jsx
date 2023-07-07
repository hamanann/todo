import { NavLink, useParams } from 'react-router-dom';
import {
  MdOutlineWatchLater,
  MdOutlineToday,
  MdOutlineInbox,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdOutlineMoreVert,
  MdOutlineAdd,
} from 'react-icons/md';

import styles from './TodosSidebar.module.css';
import { useState } from 'react';

export default function TodosSidebar() {
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  function handleExpandProjects(e) {
    e.preventDefault();
    setProjectsExpanded(prevExpanded => !prevExpanded);
  }

  function handleAddProject(e) {
    e.preventDefault();
    console.log('add project');
    alert('Should open project creation form');
  }

  return (
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
            <div className={styles.projectOptions}>
              <MdOutlineAdd
                className={`${styles.icon} ${styles.addProjectIcon}`}
                onClick={handleAddProject}
              />
              {projectsExpanded ? (
                <MdOutlineExpandLess
                  className={`${styles.icon} ${styles.expandProjectsIcon}`}
                  onClick={handleExpandProjects}
                />
              ) : (
                <MdOutlineExpandMore
                  className={`${styles.icon} ${styles.expandProjectsIcon}`}
                  onClick={handleExpandProjects}
                />
              )}
            </div>
          </NavLink>
          {projectsExpanded && (
            <>
              <ProjectLink title='Project 1' />
              <ProjectLink title='Project 2' />
            </>
          )}
        </div>
      </nav>
    </aside>
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
