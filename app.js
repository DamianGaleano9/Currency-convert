function coin() {

    this.name;
    this.exchangeRate;
    this.message = [
        "There is no cash at this time",
        "The amount is too high",
        "The minimun withdrawal amount is 100"
    ]

    this.convert = function(rode) {
        conversionResult = rode * this.exchangeRate;
        var messageHTML;

        if(conversionResult <= 0) {
            messageHTML = this.message[0];
        } else if (rode >= 10000 ) {
            messageHTML = this.message[1];
        } else if (rode <= 100) {
            messageHTML = this.message[2];
        } else {    
            messageHTML = rode + "Pesos are" + conversionResult + " " + this.name;
        }

        document.getElementById('result').innerHTML = messageHTML;

    };
}

var pesos = new coin();
    pesos.name = "Pesos";
    pesos.exchangeRate = 2872;

function convertCurrency() {
    var rodeSelected = document.getElementById('rode').value;
    pesos.convert(rodeSelected);
}


