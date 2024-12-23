import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
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
