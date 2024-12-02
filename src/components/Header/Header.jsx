import "./header.css";
import {user, onClose} from "../../hooks/useTelegram.js";
import Button from "../Button/Button";

const Header = () => {

    // const {user, onClose} = useTelegram(); /* (получаем сущности из хука для работы с обьектом tg) */

    return (
        <div className={"header"}> 
            <Button onClick={onClose}>Close</Button>
            <span className={"username"}>
                {user} {/* (выводим на пользователя данные о нем(получили в хуке из обьекта tg)) */}
            </span>
            Hello World!
        </div>
    );
};

export default Header;