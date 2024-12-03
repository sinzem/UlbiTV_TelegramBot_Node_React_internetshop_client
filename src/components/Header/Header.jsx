import "./header.css";
// import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {

    const tg = window.Telegram.WebApp;
    // const {user, onClose} = useTelegram(); /* (получаем сущности из хука для работы с обьектом tg) */

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