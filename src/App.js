import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp; /* (для работы с телеграммом - на браузер выдает без стилей) */

function App() {

  useEffect(() => {
    tg.ready(); /* (вызываем для обозначения готовности работы TG - проинициализировалось и можно отрисовывать) */
  }, [])

  const onClose = () => {
    tg.close(); 
  }

  return (
    <div className="App">
      Hello World!
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
