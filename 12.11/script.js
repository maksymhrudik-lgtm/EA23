const form = document.getElementById("myForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const terms = document.getElementById("terms");

function check(input, condition, errorText) {
    const error = document.getElementById(input.id + "Error");

    if (condition) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        error.textContent = "";
        return true;
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        error.textContent = errorText;
        return false;
    }
}

function validate() {
    let result = true;

    result = check(name, name.value.trim().length >= 2,
        "Введіть мінімум 2 символи.") && result;

    result = check(email, email.value.trim() !== "" && email.validity.valid,
        "Введіть правильний Email.") && result;

    result = check(password, password.value.length >= 6,
        "Пароль повинен містити 6 символів.") && result;

    result = check(confirm, confirm.value !== "" &&
        confirm.value === password.value,
        "Паролі не збігаються.") && result;

    result = check(terms, terms.checked,
        "Потрібно погодитися з умовами.") && result;

    return result;
}

form.addEventListener("input", function(event) {
    if (event.target.id !== "myForm") {
        validate();
    }

    document.getElementById("message").textContent = "";
});

form.addEventListener("blur", function() {
    validate();
}, true);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validate()) {
        document.getElementById("message").textContent =
            "Форму успішно заповнено!";
    }
});

document.getElementById("clear").addEventListener("click", function() {
    form.reset();

    document.querySelectorAll("input").forEach(function(input) {
        input.classList.remove("valid", "invalid");
    });

    document.querySelectorAll("small").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("message").textContent = "";
});