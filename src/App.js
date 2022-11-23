import React from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import Karsina from "./components/Karsina/Karsina";

function App() {
    //карточки
    const [item, setItem] = React.useState([]);

    //карточки в корзину
    const [cartItem, setCartItem] = React.useState([]);

    //искать карт
    const [searchValue, setSearchValue] = React.useState('');

    //открыть корзину
    const [cartOpened, setCartOpened] = React.useState(false);

    //сервер бак енд
    React.useEffect(() =>{

        axios.get('https://6373d228716c2e1916522593.mockapi.io/item').then(res =>{
            setItem(res.data);
        });
        axios.get('https://6373d228716c2e1916522593.mockapi.io/carts').then(res =>{
            setCartItem(res.data);
        })

    }, []);

    //доб карт в корзину
    const onAddToCart = (obj) =>{
        axios.post('https://6373d228716c2e1916522593.mockapi.io/carts', obj);
        setCartItem(prev => [...prev, obj]);
    }

    //удалять карт из корзины
    const onRemoveItem = (id) => {
        axios.delete(`https://6373d228716c2e1916522593.mockapi.io/carts/${id}`);
        setCartItem((prev) => prev.filter(item => item.id !== id));
    }

    //написать то что искал в место все кроссы
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

  return (
    <div className="App">
        {cartOpened && <Karsina item={cartItem} onClose={() => setCartOpened(false) } onRemove={onRemoveItem}/>}
        <Nav onClickCart={() => setCartOpened(true)} />
        <div className="content">
            <div className="content2">
                <h1 className="contentH1">{searchValue ? `Search by request: "${searchValue}"` : 'All sneakers'}</h1>
                <div className="searchBlock">
                    <img width={30} height={30} id="searchImg" src="/img/search.pmh.png" alt="Search"/>
                    {searchValue && <img
                        onClick={() => setSearchValue('')}
                        className="clearSearch"
                        width={20} height={20}
                        src="/img/remove.png" alt="Clear"/>
                    }
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                </div>
            </div>
            <div className="cards">
                {item.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>(
                    <Cards
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log("Add to basket")}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>

    </div>
  );
}

export default App;
