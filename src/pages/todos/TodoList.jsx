import TodoCard from './TodoCard';
import styles from './TodoList.module.css';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

export default function TodoList({ title, todos, showDate, showProject }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.options}>
            <HiOutlineAdjustmentsHorizontal className={styles.headerIcon} />
          </div>
        </header>
        <div className={styles.todos}>
          {todos.map(todo => {
            return (
              <TodoCard
                key={todo.id}
                todo={todo}
                showDate={showDate}
                showProject={showProject}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
