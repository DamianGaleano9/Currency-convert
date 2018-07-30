function coin() {


    this.name;
    this.exchangeRate;

    this.convert = function(rode) {
        conversionResult = rode * this.exchangeRate;

        alert(conversionResult);

    };
}

var pesos = new coin();
    pesos.name = "Pesos";
    pesos.exchangeRate = 2872;

    function convertCurrency() {
        pesos.convert(2900);
    }