import React from "react";
import "./Cards.css"

function Cards({imageUrl, title, price, onPlus}){
    //доб в корзину
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded);
    }

    //доб в лайк
    const [isLiked, setIsLiked] = React.useState(false);
    const onClickLike = () => {
        setIsLiked(!isLiked);
    }

    return(
            <div className="card">
                <img width={20} height={20} className="btnLike" onClick={onClickLike} src={isLiked ? "/img/heartLike.png" : "/img/heart.png"}  alt="Like"/>

                <img width={140} height={140} src={imageUrl}/>
                <h5>{title}</h5>
                <div className="cardBottom">
                    <div className="cardBottom2">
                        <p>Price: </p>
                        <b>{price} tg.</b>
                    </div>

                    <img className="btnPlus" width={20} height={20} onClick={onClickPlus} src={isAdded ? "/img/check.png" : "/img/plus.png"} />
                </div>
            </div>

);
}
export default Cards;