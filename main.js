var form = document.querySelector('form');
form.onsubmit = function convertCurrency(event) {
    event.preventDefault();

    var selectedOption = document.querySelector('form select');
    var input = document.querySelector('form input');
    var resultParagraph = document.querySelector('.result');

    var result = 0;

    if (selectedOption.value === "dollar") {
        result = input.value / 3.5;
    } else if (selectedOption.value === "dinar") {
        result = input.value / 5.1;
    } else {
        result = input.value;
    }

    resultParagraph.textContent = 'Result: ' + result;
}
