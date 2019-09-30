// --------------------- Get all the references ---------------------
var MultiStepForm = document.getElementById('MultiStepForm');
var StepOneForm = document.getElementById('StepOneContainer');
var StepTwoForm = document.getElementById('StepTwoContainer');
var StepThreeForm = document.getElementById('StepThreeContainer');
var SuccessContainer = document.getElementById('SuccessContainer');

var StepOneNext = document.getElementById('StepOneNext');
var StepTwoPrevious = document.getElementById('StepTwoPrevious');
var StepTwoNext = document.getElementById('StepTwoNext');
var StepThreePrevious = document.getElementById('StepThreePrevious');
var StepThreeSubmit = document.getElementById('StepThreeSubmit');

var firstName = document.getElementById('first_name');
var firstNameError = document.getElementById('first_name_error');
var lastName = document.getElementById('last_name');
var lastNameError = document.getElementById('last_name_error');
var email = document.getElementById('email');
var emailError = document.getElementById('email_error');

var contact = document.getElementById('contact');
var contactError = document.getElementById('contact_error');
var city = document.getElementById('city');
var cityError = document.getElementById('city_error');
var country = document.getElementById('country');
var countryError = document.getElementById('country_error');

var enrolledProgram = document.getElementById('select_program');
var enrolledProgramError = document.getElementById('select_program_error');
var message = document.getElementById('message');
var messageError = document.getElementById('message_error');


var stepOneIsValid = true, stepTwoIsValid = true, stepThreeIsValid = true;

// ------------- Function declarations ----------------
function showFirstStepForm(e) {
    if (e) {
        e.preventDefault();
    }
    StepOneForm.style.display = "block";
    StepTwoForm.style.display = "none";
    StepThreeForm.style.display = "none";
}

function showSecondStepForm(e) {
    if (e) {
        e.preventDefault();
    }
    StepOneForm.style.display = "none";
    StepTwoForm.style.display = "block";
    StepThreeForm.style.display = "none";
}

function showThirdStepForm(e) {
    if (e) {
        e.preventDefault();
    }
    StepOneForm.style.display = "none";
    StepTwoForm.style.display = "none";
    StepThreeForm.style.display = "block";
}

function showSuccessMessage() {
    MultiStepForm.style.display = "none";
    SuccessContainer.style.display = "flex";
    console.log(firstName.value, lastName.value, email.value, contact.value, city.value, country.value, enrolledProgram.value, message.value)
}

function validateFirstStepForm(e) {
    e.preventDefault();
    var namePattern = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,15}$/g;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    var isNameValid = true, isEmailValid = true;
    firstNameError.style.display = "none";
    emailError.style.display = "none";
    // ------- Name Validation ---------
    var firstNameValue = firstName.value;
    if (firstNameValue == '') {
        firstNameError.innerText = "This field can not be empty!";
        firstNameError.style.display = "block";
        isNameValid = isNameValid && false;
    }
    else if (!namePattern.test(firstNameValue)) {
        firstNameError.innerText = "Please enter a valid name";
        firstNameError.style.display = "block";
        isNameValid = false;
    } else if (namePattern.test(firstNameValue)) {
        firstNameError.style.display = "none";
        isNameValid = isNameValid && true;
    }

    // ------- Email Validation ---------
    var emailValue = email.value;
    if (emailValue == '') {
        emailError.innerText = "This field can not be empty!";
        emailError.style.display = "block";
        isEmailValid = isEmailValid && false;
    }
    else if (!emailPattern.test(emailValue)) {
        emailError.innerText = "Please enter a valid email";
        emailError.style.display = "block";
        isEmailValid = false;
    }
    else if (emailPattern.test(emailValue)) {
        emailError.style.display = "none";
        isEmailValid = isEmailValid && true;
    }

    stepOneIsValid = stepOneIsValid && isNameValid && isEmailValid;
    console.log(stepOneIsValid)
    if (isNameValid && isEmailValid) {
        showSecondStepForm();
    }
}

function validateSecondStepForm(e) {
    e.preventDefault();
    var countryPattern = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,15}$/g;
    var contactPattern = /^(\+\d{2,4})?\s?(\d{10})$/g;
    var isCountryValid = true, isContactValid = true;
    firstNameError.style.display = "none";
    contactError.style.display = "none";
    // ------- Country Validation ---------
    var countryValue = country.value;
    if (countryValue == '') {
        countryError.innerText = "This field can not be empty!";
        countryError.style.display = "block";
        isCountryValid = isCountryValid && false;
    }
    else if (!countryPattern.test(countryValue)) {
        countryError.innerText = "Please enter a valid country name";
        countryError.style.display = "block";
        isCountryValid = false;
    } else if (countryPattern.test(countryValue)) {
        countryError.style.display = "none";
        isCountryValid = isCountryValid && true;
    }

    // ------- Contact Validation ---------
    var contactValue = contact.value;
    if (contactValue == '') {
        contactError.innerText = "This field can not be empty!";
        contactError.style.display = "block";
        isContactValid = isContactValid && false;
    }
    else if (!contactPattern.test(contactValue)) {
        contactError.innerText = "Please enter a valid contact";
        contactError.style.display = "block";
        isContactValid = false;
    }
    else if (contactPattern.test(contactValue)) {
        contactError.style.display = "none";
        isContactValid = isContactValid && true;
    }

    stepTwoIsValid = stepTwoIsValid && isCountryValid && isContactValid;
    console.log(stepTwoIsValid)
    if (isCountryValid && isContactValid) {
        showThirdStepForm();
    }
}

function validateThirdStepForm(e) {
    e.preventDefault();
    var isProgramValid = true, isMessageValid = true;
    enrolledProgramError.style.display = "none";
    messageError.style.display = "none";
    // ------- Program Validation ---------
    var enrolledProgramValue = enrolledProgram.value;
    if (enrolledProgramValue == "") {
        enrolledProgramError.innerText = "Please select one program";
        enrolledProgramError.style.display = "block";
        isProgramValid = isProgramValid && false;
    } else {
        enrolledProgramError.style.display = "none";
        isProgramValid = isProgramValid && true;
    }

    // ------- Message Validation ---------
    var messageValue = message.value;
    if (messageValue == '') {
        messageError.innerText = "This field can not be empty!";
        messageError.style.display = "block";
        isMessageValid = isMessageValid && false;
    } else {
        messageError.style.display = "none";
        isMessageValid = isMessageValid && true;
    }

    stepThreeIsValid = stepThreeIsValid && isProgramValid && isMessageValid;
    console.log(stepThreeIsValid)
    if (isProgramValid && isMessageValid) {
        showSuccessMessage();
    }
}

// ------------------------ Event Listeners ------------------------
StepOneNext.addEventListener('click', validateFirstStepForm);
StepTwoPrevious.addEventListener('click', showFirstStepForm);
StepTwoNext.addEventListener('click', validateSecondStepForm);
StepThreePrevious.addEventListener('click', showSecondStepForm);
StepThreeSubmit.addEventListener('click', validateThirdStepForm);

// var inputList = document.getElementsByTagName('input');
// console.log(inputList);

// for (i = 0; i < inputList.length; i++) {
//     inputList[i].addEventListener('input', validateForm);
// }

// function validateForm(e) {
//     console.log('validate :', e.target.value, e.srcElement.id);

//     switch (srcElement) {
//         case 'first_name': validateFirstName(); break;
//         case 'last_name': validateLastName(); break;
//         case 'email': validateEmail(); break;
//         case 'contact': validateContact(); break;
//         case 'city': validateCity(); break;
//         case 'country': validateCountry(); break;
//         case 'select_program': validateSelectedProgram(); break;
//         case 'message': validateMessage(); break;
//         default:
//             break;

//     }

// }