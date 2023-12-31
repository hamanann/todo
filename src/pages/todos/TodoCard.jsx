import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './TodoCard.module.css';
import {
  MdOutlineCheck,
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineMoreVert,
} from 'react-icons/md';
import { toggleTodo } from '../../api';

export default function TodoCard({ todo, showProject, showDate }) {
  const [done, setDone] = useState(todo.done);
  const dueDate = new Date(todo.due_date);

  const handleToggleTodo = async () => {
    setDone(prevDone => !prevDone);
    try {
      await toggleTodo(todo.id, !done);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`${styles.card} ${done && styles.completed}`}>
      <div className={styles.todoButtonContainer}>
        <button
          type='button'
          className={`${styles.todoButton} ${
            styles['priority' + todo.priority]
          }`}
          onClick={handleToggleTodo}
        >
          <MdOutlineCheck className={`${styles.checkmarkIcon}`} />
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
              to={`/todos/projects/${todo.project.id}`}
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
