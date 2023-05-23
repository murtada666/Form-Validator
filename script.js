const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//show input error massage
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message; 
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
//check Email
function checkEmail(input){
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value.trim())) {
        showSuccess(input)
    }else{
        showError(input, `Email is NOT valid`)
    }
}

//check required
function checkRequired(inputArr) {
    inputArr.forEach(function (input){
        if (input.value.trim() === ""){
            showError(input, `${getFiledName(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
    };

//get FiledName
function getFiledName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check Length
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFiledName(input)} must be at least ${min}`)
    }else if (input.value.length > max){
        showError(input, `${getFiledName(input)} must be less than${max}`)
    }else{
        showSuccess(input)
    }
}

// passwords match
function passwordsMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "passwords does NOT match")
    }
}

//Event Listeners
form.addEventListener("submit", function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    passwordsMatch(password, password2);
    checkEmail(email);
});