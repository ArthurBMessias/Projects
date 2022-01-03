const loginButton = document.getElementById('login-button');

function validateLogin() {
  const inputEmail = document.getElementById('email').value;
  const inputPassword = document.getElementById('password').value;

  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', validateLogin);

const submitButton = document.getElementById('submit-btn');
const agreementBox = document.getElementById('agreement');

function agreementCheck() {
  if (agreementBox.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

agreementBox.addEventListener('click', agreementCheck);

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function charCount() {
  const maxLength = textarea.getAttribute('maxlength');
  const currentLength = textarea.value.length;

  if (currentLength >= maxLength) {
    alert('Você atingiu o limite de caractéres permitido!');
  }

  counter.innerText = maxLength - currentLength;
}

textarea.addEventListener('input', charCount);

function selectedFamily() {
  const familyOptions = document.getElementsByName('family');

  for (let index = 0; index < familyOptions.length; index += 1) {
    if (familyOptions[index].checked) {
      return familyOptions[index].value;
    }
  }
}

function selectedContent() {
  const contentOptions = document.getElementsByName('content');
  const Content = [];

  for (let index = 0; index < contentOptions.length; index += 1) {
    if (contentOptions[index].checked) {
      Content.push(` ${contentOptions[index].value}`);
    }
  }
  return Content;
}

function selectedRating() {
  const rateOptions = document.getElementsByName('rate');

  for (let index = 0; index < rateOptions.length; index += 1) {
    if (rateOptions[index].checked) {
      return rateOptions[index].value;
    }
  }
}

function agroupInfo() {
  const formName = document.getElementById('input-name').value;
  const formLastName = document.getElementById('input-lastname').value;
  const formEmail = document.getElementById('input-email').value;
  const formHouse = document.getElementById('house').value;
  const formFamily = selectedFamily();
  const formContents = selectedContent();
  const formEvaluation = selectedRating();
  const formTextArea = document.getElementById('textarea').value;

  return `Nome: ${formName} ${formLastName};
  Email: ${formEmail}
  Casa: ${formHouse}
  Família: ${formFamily}
  Matérias: ${formContents}
  Avaliação: ${formEvaluation}
  Observações: ${formTextArea}`;
}

function formSubmited(event) {
  event.preventDefault();
  const submitedForm = agroupInfo();

  const form = document.getElementById('evaluation-form');
  form.innerText = '';
  const userData = document.createElement('userData');
  userData.innerText = submitedForm;
  form.appendChild(userData);
}

submitButton.addEventListener('click', formSubmited);

