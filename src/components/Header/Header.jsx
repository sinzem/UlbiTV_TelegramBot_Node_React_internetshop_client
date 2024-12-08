import "./header.css";
import Button from "../Button/Button";
// import {useTelegram} from "../../hooks/useTelegram"; /* (с хуком не работает, обьект tg теряется) */

const Header = () => {

    // const {tg, onClose} = useTelegram();
    const tg = window.Telegram.WebApp;

    const onClose = () => { /* (функция закрытия) */
        tg.close(); /* (закрываем с помощью встроенного метода) */ 
    }

    return (
        <div className={"header"}> 
            <Button onClick={onClose}>Close</Button>
            <span className={"username"}>
                {tg?.initDataUnsafe?.user?.username} {/* (выводим на пользователя данные о нем(получили из обьекта tg)) */}
            </span>
            Hello World!
        </div>
    );
};

export default Header;