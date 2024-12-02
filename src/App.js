import { useEffect } from 'react';
import './App.css';
// const tg = window.Telegram.WebApp; /* (для работы с телеграммом - на браузер выдает без стилей - выносим в отдельный хук) */
import {useTelegram} from "./hooks/useTelegram"; /* (подключаем хук для работы с tg-обьектом) */

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready(); /* (вызываем для обозначения готовности работы TG - проинициализировалось и можно отрисовывать) */
  }, [])


  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
