# Тестовое задание на позицию RN-разработчика

Приложение состоит из двух экранов:  
	1.	Экран “О приложении” (первый, показывается при запуске).  
	2.	Экран “Котировки” (содержащую котировки с биржи poloniex, обновляемые в фоне по таймеру).  
	3.	Для навигации используется react-navigation  
	4.	Сборка, запуск и отладка на основе expo  

	1.	Данные в таблице обновляются по таймеру раз в 5 секунд
	2.	Данные не обновляются когда экран не активен (т.е. открыт экран О приложении)
	3.	В случае ошибки получения данных или парсинга их (т.е. в целом при любой ошибке), индикатируем об этом в верхней части таблицы показывая спец ячейку содержащую текст “ошибка”, в консоль логируем детали. В случае когда ошибка пропадает (например на следующей итерации таймера), индикацию ошибки скрываем.
	4.	Анимация обновления значений в элементах таблицы
	5.	Спиннер при начальной загрузке данных (до момента получения первого пакета данных либо ошибки таблицей; после открытия экрана).

```
ts
expo
mobx
react-navigation
react-native-reanimated

```
<img src="https://github.com/Igiz23/rn-test-task/assets/74706458/a8f2b3fa-3ca8-4a11-863d-ccbecd566a04" width="215"/>
<img src="https://github.com/Igiz23/rn-test-task/assets/74706458/789829c4-ddc6-4d93-93a0-ad5c7bd84242" width="200"/>
<img src="https://github.com/Igiz23/rn-test-task/assets/74706458/27825aef-ec68-4e64-b547-00d9aa551d5c" width="200"/>
<img src="https://github.com/Igiz23/rn-test-task/assets/74706458/058b8e5a-091f-4dc4-8f1a-c584c645b4d8" width="200"/>
