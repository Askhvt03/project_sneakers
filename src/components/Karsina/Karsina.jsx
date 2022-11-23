import "./Karsina.css"
function Karsina({onClose, onRemove, item = []}){
    return(
            <div className="overlay">
                <div className="drawer">
                    <h2 className="cartH2">
                        Basket <img onClick={onClose} className="cartImgH2" width={30} height={30} src="/img/remove.png"/></h2>

                    {item.length > 0 ? (
                        <div>
                            <div className="cartItems">
                                {item.map((item) =>(
                                    <div className="cartItem">
                                        <img className="cartImg" width={80} height={80} src={item.imageUrl}/>
                                        <div className="cartText">
                                            <p className="cartP">{item.title}</p>
                                            <b className="cartB">{item.price} tg.</b>
                                        </div>
                                        <img className="cartImg2"
                                             width={30} height={30}
                                             onClick={() => onRemove(item.id)}
                                             src="/img/remove.png"/>
                                    </div>
                                ))}
                            </div>

                            <div className="cartUl">
                                <ul>
                                    <li className="li1">
                                        <span>Итого: </span>
                                        <div className="cartUlDiv"></div>
                                        <b>85 998тг.</b>
                                    </li>
                                    <li className="li1">
                                        <span>Налог 5%:</span>
                                        <div className="cartUlDiv"></div>
                                        <b>4 299тг.</b>
                                    </li>
                                </ul>
                                <button className="cartBtn">Оформить заказ </button>
                            </div>
                        </div>)
                        :  (
                    <div className="comeBack">
                        <img width={120} height={120} src="/img/comeBack.png"/>
                        <h2>Basket is empty</h2>
                        <button onClick={onClose} className="comeBackButton">Come back</button>
                    </div> )
                    }

                </div>





            </div>
    );
}
export default Karsina;