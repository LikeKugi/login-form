import Header from '@/components/Header/Header';
import styles from './App.module.scss'
import Login from '@/components/Login/Login';

function App() {

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.page__content}>
        <Login />
      </div>
    </div>

  )
}

export default App
