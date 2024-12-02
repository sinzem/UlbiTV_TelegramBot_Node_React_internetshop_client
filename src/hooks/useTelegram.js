const tg = window.Telegram.WebApp; /* (подключаем обьект телеграмма) */

/* (хук для более удобной работы с обьектом TG) */
export function useTelegram() {
    
    const onClose = () => { /* (функция закрытия) */
        tg.close(); /* (закрываем с помощью встроенного метода) */ 
    }

    const onToggleButton = () => { /* (функция для показа/скрытия встроенной кнопки tg, используем встроенные методы(подробнее в документации)) */
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return { /* (экспрортируем) */
        onToggleButton,
        onClose, 
        tg,
        user: tg?.initDataUnsafe?.user /* (данные о пользователе из встроенного tg обьекта(initData - просто строка, initDataUnsafe - распаршенная, при входе пользователя будем отображать его имя)) */
    }   
}