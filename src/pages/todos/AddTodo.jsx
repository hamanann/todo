import styles from './AddTodo.module.css';

export default function AddTodo() {
  return (
    <div className={styles.addContainer}>
      <label htmlFor='title'>
        <input type='text' name='title' id='title' />
      </label>
      <label htmlFor='description'>
        <input type='text' name='description' id='description' />
      </label>
      <label htmlFor='dueDate'>
        <input type='date' name='due_date' id='dueDate' />
      </label>
      <label htmlFor='priority'>
        <select name='priority' id='priority'>
          <option value='1'>Priority 1</option>
          <option value='2'>Priority 2</option>
          <option value='3'>Priority 3</option>
          <option value='4'>Priority 4</option>
        </select>
      </label>
      <label htmlFor='project'>
        <select name='project_id' id='project'>
          {}
        </select>
      </label>
    </div>
  );
}
