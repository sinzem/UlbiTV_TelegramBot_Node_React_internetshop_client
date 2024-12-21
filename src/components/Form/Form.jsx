import { useCallback, useEffect, useState } from "react";
import "./form.css";

const tg = window.Telegram.WebApp;

const Form = () => {

    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [subject, setSubject] = useState("physical");

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData)
        return () => {
            tg.offEvent("mainButtonClicked", onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setText("Send data")
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onchangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={"input"} 
                    type="text"
                    placeholder={"Страна"}
                    value={country}
                    onChange={onChangeCountry} />
            <input className={"input"} 
                    type="text" 
                    placeholder={"Улица"}
                    value={street}
                    onChange={onChangeStreet} />
            <select className={"select"}
                    value={subject}
                    onChange={onchangeSubject}>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;