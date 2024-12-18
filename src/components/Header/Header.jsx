import "./header.css";
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;

const Header = () => {

    const onClose = () => { 
        tg.close(); 
    }

    return (
        <div className={"header"}> 
            <Button onClick={onClose}>Close</Button>
            <span className={"username"}>
                {tg?.initDataUnsafe?.user?.username} {/* (выводим на пользователя данные о нем(получили из обьекта tg)) */}
            </span>
        </div>
    );
};

export default Header;