import TodoApp from "./TodoApp"
import styles from './styles/App.module.css'
const App = () => {
  return (
    <div className={styles.AppContainer}>
      <TodoApp />
    </div>
  )
}

export default App