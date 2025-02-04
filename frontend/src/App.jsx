import {useEffect, useState} from 'react';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Item from './components/item/Item';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import FullItem from './components/fullItem';
import Cart from './components/cart';
import {useDispatch, useSelector} from "react-redux";
import { setData } from "./redux/slices/dataSlice.js";

function App() {
    const [active, setActive] = useState('clothes');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const getFetchData = async (url) => {
        try {
            const response = await fetch(url);
            console.log(response)
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            const data = await response.json();
            dispatch(setData(data));
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };


    useEffect(() => {
        getFetchData("http://localhost:5000/store-data");
    }, []);

    const currentCategoryItems = data?.filter((i) => i.category === active);

    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Categories active={active} setActive={setActive}/>
                <Routes>
                    <Route
                        path="/shop"
                        element={
                            <>
                                <div className="items">
                                    {currentCategoryItems.map((i) => (
                                        <Item data={i} key={i.id}/>
                                    ))}
                                </div>
                            </>
                        }
                    />
                    <Route path="/" element={<Navigate to={'/shop'}/>}/>
                    <Route path="/product/*" element={<FullItem/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
