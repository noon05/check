// Переменная для состояния (0 - working, 1 - error, 2 - warning)
let statusValue = 0;

// Соответствия состояний символам и текстам
const statusData = {
    //0: { symbol: "&#10004;", text: "Рабочий", description: "Сервис работает в штатном режиме." },
    //1: { symbol: "&#10008;", text: "Ошибка", description: "Произошла ошибка в работе сервиса." },
    2: { symbol: "&#9888;", text: "Работа с ошибками", description: "Сервис работает с ошибками. Chat GPT работает некорректно" }
};

// Функция для обновления состояния
function updateStatus() {
    const statusBox = document.getElementById("status-box");
    const statusIcon = document.getElementById("status-icon");
    const statusText = document.getElementById("status");
    const descriptionText = document.getElementById("description");

    statusBox.className = `status-box status-${Object.keys(statusData)[statusValue]}`;
    statusIcon.innerHTML = statusData[statusValue].symbol;
    statusText.textContent = statusData[statusValue].text;
    descriptionText.textContent = statusData[statusValue].description;
}

// Вызов функции для начального обновления
updateStatus();

// Пример изменения состояния (можете изменить значение statusValue и снова вызвать updateStatus())
statusValue = 2; // Устанавливаем состояние "ошибка"
updateStatus();
