const cardNumber = document.getElementById("number");
const cardName = document.getElementById("name");
const cardDate = document.getElementById("date");
const monthCard = document.getElementById("month");
const yearCard = document.getElementById("year");
const cvcBackCard = document.getElementById("cvc");

const nameInput = document.getElementById("card-name");
const numberInput = document.getElementById("card-number");
const monthInput = document.getElementById("card-month");
const yearInput = document.getElementById("card-year");
const cvcInput = document.getElementById("card-cvc");
const submitBtn = document.getElementById("submit-btn");
const completed = document.querySelector(".thank");
const fSection = document.getElementById("formSection");

function setCardNumber (e) {
      cardNumber.textContent = format(e.target.value);
}
function setCardName (e) {
      cardName.textContent = format(e.target.value);
}
function setCardMonth (e) {
      monthCard.textContent = format(e.target.value);
}
function setCardYear (e) {
      yearCard.textContent = format(e.target.value);
}
function setCardCvc (e) {
      cvcBackCard.textContent = format(e.target.value);
}

function handleSubmit(e) {

      e.preventDefault();
      if(!nameInput.value) {
            nameInput.classList.add("error");
            nameInput.parentElement.classList.add("error-message");
      } else {
            nameInput.classList.remove("error");
            nameInput.parentElement.classList.remove("error-message");
      }

      if(!numberInput.value ) {
            numberInput.classList.add("error");
            numberInput.parentElement.classList.add("error-message");
      } else {
            numberInput.classList.remove("error");
            numberInput.parentElement.classList.remove("error-message");
      }
      if(numberInput.value > 16) {
            numberInput.classList.add("incomplete");
            numberInput.parentElement.classList.add("incomplete-message");
      } else {
            numberInput.classList.remove("incomplete");
            numberInput.parentElement.classList.remove("incomplete-message");
      }
      if(!monthInput.value) {
            monthInput.classList.add("error");
            monthInput.parentElement.classList.add("error-message");
      } else {
            monthInput.classList.remove("error");
            monthInput.parentElement.classList.remove("error-message");
      }
      if(!yearInput.value) {
            yearInput.classList.add("error");
            yearInput.parentElement.classList.add("error-message");
      } else {
            yearInput.classList.remove("error");
            yearInput.parentElement.classList.remove("error-message");
      }
      if(!cvcInput.value) {
            cvcInput.classList.add("error");
            cvcInput.parentElement.classList.add("error-message");
      } else {
            cvcInput.classList.remove("error");
            cvcInput.parentElement.classList.remove("error-message");
      }
      if (nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value &&  numberInput.value.length === 16) {
            completed.classList.remove("hidden");
            fSection.classList.add("hidden");
            } 
      }

function format(s) {
      return s.toString().replace(/\d{4}(?=.)/g, "$& ");
    }

    nameInput.addEventListener('keyup', setCardName);
    numberInput.addEventListener('keyup', setCardNumber);
    monthInput.addEventListener('keyup', setCardMonth);
    yearInput.addEventListener('keyup', setCardYear);
    cvcInput.addEventListener('keyup', setCardCvc);
    submitBtn.addEventListener('click', handleSubmit);




