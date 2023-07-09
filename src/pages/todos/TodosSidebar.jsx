import {
  Await,
  NavLink,
  useLoaderData,
  useParams,
  defer,
} from 'react-router-dom';
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
import { Suspense, useState } from 'react';
import { getTodosCustomProjects } from '../../api';
import TodosSidebarLoading from './TodosSidebarLoading';

export async function loader() {
  const customProjectsPromise = getTodosCustomProjects();

  return defer({ customProjectsPromise });
}

export default function TodosSidebar({ defaultLists, customProjects }) {
  const { customProjectsPromise } = useLoaderData();
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
          <DefaultProjectLink title='General'>
            <MdOutlineInbox className={styles.icon} />
          </DefaultProjectLink>

          <DefaultProjectLink title='Today'>
            <MdOutlineToday className={styles.icon} />
          </DefaultProjectLink>

          <DefaultProjectLink title='Upcoming'>
            <MdOutlineWatchLater className={styles.icon} />
          </DefaultProjectLink>
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
            <Suspense fallback={<TodosSidebarLoading />}>
              <Await resolve={customProjectsPromise}>
                {projects => {
                  return projects.map(project => {
                    return (
                      <CustomProjectLink key={project.id} project={project} />
                    );
                  });
                }}
              </Await>
            </Suspense>
          )}
        </div>
      </nav>
    </aside>
  );
}

function CustomProjectLink({ project }) {
  const params = useParams();
  const className = `${params.projectId === project.id ? styles.active : ''} ${
    styles.sidebarLink
  } ${styles.project}`;

  return (
    <div>
      <NavLink
        to={`projects/${project.id}`}
        className={className}
        state={{
          projectId: project.id,
          projectTitle: project.title,
        }}
      >
        {project.title}
        <MdOutlineMoreVert className={styles.linkOptions} />
      </NavLink>
    </div>
  );
}

function DefaultProjectLink({ title, children }) {
  return (
    <NavLink
      to={title === 'General' ? 'projects/general' : title.toLowerCase()}
      className={({ isActive }) =>
        [isActive ? styles.active : '', styles.sidebarLink].join(' ')
      }
    >
      {children}
      {title}
    </NavLink>
  );
}
