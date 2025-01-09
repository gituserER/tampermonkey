// Функция для создания уведомлений
function showNotification(message, type = 'info', duration = 3000) {
    // Создаем контейнер для уведомлений, если его еще нет
    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    // Создаем уведомление
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification ${type}`;

    // Удаление уведомления при клике
    notification.addEventListener('click', () => {
        notification.remove();
    });

    // Добавляем уведомление в контейнер
    notificationContainer.appendChild(notification);

    // Удаляем уведомление через заданное время
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Пример использования
showNotification('Информация о событии', 'info', 5000); // Инфо уведомление
showNotification('Успешное действие', 'success');       // Успех
showNotification('Ошибка при выполнении', 'error');     // Ошибка
