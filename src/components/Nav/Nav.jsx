import "./Nav.css"
function Nav(props){

    return(
    <header>
        <div className="headerLeft">
            <img width={40} height={40}  src="/img/logo.png"/>
            <div className="headerLeftInfo">
                <h3>Sneakers </h3>
                <p>Shop has best sneakers</p>
            </div>
        </div>
        <ul className="headerRight">
            <li className="btnBasket" onClick={props.onClickCart}>
                <img id="imgHead" width={25} height={25} src="/img/teleg.png"/>
                <span>120000 tg.</span>
            </li>
            <li>
                <img width={25} height={25} src="/img/user.png"/>
            </li>
        </ul>
    </header>
    );
}
export default Nav;