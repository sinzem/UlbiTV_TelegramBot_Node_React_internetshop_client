import "./header.css";
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {

    const {user, onClose} = useTelegram(); /* (получаем сущности из хука для работы с обьектом tg) */

    return (
        <div className={"header"}> 
            <Button onClick={onClose}>Close</Button>
            <span className={"username"}>
                {user?.username} {/* (выводим на пользователя данные о нем(получили в хуке из обьекта tg)) */}
            </span>
            Hello World!
        </div>
    );
};

export default Header;