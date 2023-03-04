
function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(number) {
    console.log("number")
}

function handleSymbol(symbol) {
    console.log("symbol")
}

function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        })
}

init();