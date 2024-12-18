import { useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
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
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
