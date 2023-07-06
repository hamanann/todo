import { Link } from 'react-router-dom';
import styles from './TodoCard.module.css';
import {
  MdOutlineCheck,
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineMoreVert,
} from 'react-icons/md';

export default function TodoCard({ todo, showProject, showDate }) {
  return (
    <div className={styles.card}>
      <div className={styles.todoButtonContainer}>
        <button
          type='button'
          className={`${styles.todoButton} ${
            styles['priority' + todo.priority]
          }`}
        >
          {todo.completed && (
            <MdOutlineCheck className={styles.checkMarkIcon} />
          )}
        </button>
      </div>
      <div className={styles.todoContent}>
        <div className={styles.topContent}>
          <div className={styles.todoTitle}>{todo.title}</div>
          <div className={styles.options}>
            <MdOutlineEdit className={styles.icon} />
            <MdOutlineDelete className={styles.icon} />
            <MdOutlineMoreVert className={styles.icon} />
          </div>
        </div>

        <div className={styles.bottomContent}>
          {showDate && (
            <div className={styles.todoDetails}>
              Due: {todo.dueDate.getDate()}.{todo.dueDate.getMonth() + 1}.
              {todo.dueDate.getFullYear()}
            </div>
          )}
          {showProject && (
            <Link
              to={`../projects/${todo.project}`}
              className={styles.todoDetails}
            >
              Project: {todo.project}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
