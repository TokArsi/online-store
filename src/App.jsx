import {useEffect, useState} from 'react';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Item from './components/item/Item';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FullItem from './components/fullItem';
import Cart from './components/cart';

function App() {
  const [active, setActive] = useState('clothes');
  const [data, setData] = useState([])
  useEffect(() => {
    // Запрос на сервер
    fetch("http://localhost:3002/store-data", {
        mode: 'cors',
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) =>  setData(res))
  }, []);

  const currentCategoryItems = data.filter((i) => i.category == active);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Categories active={active} setActive={setActive} />
        <Routes>
          <Route
            path="/shop"
            element={
              <>
                <div className="items">
                  {currentCategoryItems.map((i) => (
                    <Item data={i} key={i.id} />
                  ))}
                </div>
              </>
            }
          />
          <Route path="/" element={<Navigate to={'/shop'} />} />
          <Route path="/product/*" element={<FullItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
