import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram"; /* (подключаем хук для работы с tg-обьектом - у меня не работает) */
import Header from './components/Header/Header';

function App() {

  const tg = window.Telegram.WebApp;
  const {onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready(); /* (вызываем для обозначения готовности работы TG - проинициализировалось и можно отрисовывать) */
  }, [])


  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
