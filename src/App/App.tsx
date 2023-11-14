import Header from '@/components/Header/Header';
import styles from './App.module.scss';
import Login from '@/components/Login/Login';
import Success from '@/components/Success/Success';
import { useAuth } from '@/context/AuthContext/AuthContext';

function App() {

  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.page__content}>
        {isLoggedIn ? <Success/> : <Login/>}
      </div>
    </div>

  );
}

export default App;
