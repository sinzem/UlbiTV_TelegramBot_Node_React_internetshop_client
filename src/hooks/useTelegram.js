/* (автор выносит функционал, связанный с тg в хук, но у меня он не работает, обьект tg не передается) */
export function useTelegram() {

  const tg = window.Telegram.WebApp; /* (подключаем обьект телеграмма) */
    
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
        user: tg.initDataUnsafe?.user /* (данные о пользователе из встроенного tg обьекта(initData - просто строка, initDataUnsafe - распаршенная, при входе пользователя будем отображать его имя)) */
    }   
}