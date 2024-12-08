import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
// import { useTelegram } from './hooks/useTelegram';/* (с хуком не работает, обьект tg теряется) */

function App() {

  // const {tg, onToggleButton} = useTelegram();

  const tg = window.Telegram.WebApp;

  const onToggleButton = () => { /* (функция для показа/скрытия встроенной кнопки tg, используем встроенные методы(подробнее в документации)) */
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
}

  useEffect(() => {
    // tg.ready(); /* (вызываем для обозначения готовности работы TG - проинициализировалось и можно отрисовывать) */
  }, [])


  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
