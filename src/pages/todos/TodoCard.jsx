import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './TodoCard.module.css';
import {
  MdOutlineCheck,
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineMoreVert,
} from 'react-icons/md';

export default function TodoCard({ todo, showProject, showDate }) {
  const [completed, setCompleted] = useState(todo.completed);

  const dueDate = new Date(todo.due_date);

  return (
    <div className={`${styles.card} ${completed && styles.completed}`}>
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

        {todo.description && (
          <div className={styles.description}>{todo.description}</div>
        )}

        <div className={styles.bottomContent}>
          {showDate && (
            <div className={`${styles.todoDetails} ${styles.detailsDate}`}>
              Due: {dueDate.getDate()}.{dueDate.getMonth() + 1}.
              {dueDate.getFullYear()}
            </div>
          )}
          {showProject && (
            <Link
              to={`../projects/${todo.project.id}`}
              className={`${styles.todoDetails} ${styles.detailsProject}`}
            >
              Project: {todo.project.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
