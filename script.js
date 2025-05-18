 document.getElementById('subscribeForm').addEventListener('submit', 
function(event){
  event.preventDefault();  // Отменяем стандартную отправку
   console.log('Форма отправлена');


  const nameInput = this.elements['name'];
  const emailInput = this.elements['email'];

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Проверка имени
  if (name === '') {
    alert('Введите имя!');
    nameInput.focus();
    return;
  }

  // Проверка email на наличие "@"
  if (!email.includes('@')) {
    alert('Введите корректный Email');
    emailInput.focus();
    return;
  }

  console.log('Имя:', name);
  console.log('Email:', email);
  alert('Ваш Email добавлен в рассылку!');

  this.reset();
})