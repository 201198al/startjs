const link = document.querySelector('#changeTextLink');

link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const userText = prompt('Введите новый текст для ссылки:');

    if (userText !== null) { 
        link.textContent = userText;
    }
});