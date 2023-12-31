import TodoCard from './TodoCard';
import styles from './TodoList.module.css';
import { HiOutlineAdjustmentsHorizontal, HiOutlinePlus } from 'react-icons/hi2';
// import { MdOutlineAddCircleOutline, MdOutlineAddCircle } from 'react-icons/md';

export default function TodoList({ title, todos, showDate, showProject }) {
  return (
    <div className={styles.container}>
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
        <button className={styles.addContainer} type='button'>
          <HiOutlinePlus className={styles.addIcon} />

          <span className={styles.addText}>Add todo</span>
        </button>
      </div>
    </div>
  );
}
