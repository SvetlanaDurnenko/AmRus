// key = 6635cc437d1cf0b6d7ab7c16213cf5a3
async function calculate() {
    var currency = document.querySelector("input[name=currency]:checked").value;
    var price = document.getElementById("price").value;
    var fuel = document.getElementById("fuel").value;
    var volume = document.getElementById("volume").value;
    var year = document.getElementById("year").value;

    let url = "https://baza-gai.com.ua/taxes?currency=" + currency + "&car_type=car&price=" + price + "&volume=" + volume + "&motor=" + fuel + "&year=" + year;
    let key = "6635cc437d1cf0b6d7ab7c16213cf5a3";
    let request = fetch(url, { headers: { "Accept": "application/json", "X-Api-Key": key } }).then(r => r.json());
    let data = await request;

    document.getElementById("tax").innerText = data.nds;
    document.getElementById("duty").innerText = data.duty;
    document.getElementById("excise-duty").innerText = data.excise;
    document.getElementById("pension").innerText = data.pension_fund;
    document.getElementById("customs-payments").innerText = data.all_fees_with_pension_fund;
    document.getElementById("total-amount").innerText = data.result_price;

    document.getElementById("calculate-result").style.display = "flex";



}

if (document.getElementById("usd").checked) {
    document.getElementById("usdLabel").style.border = "2px solid #18D988";
    document.getElementById("eurLabel").style.border = "2px solid #13160E";
}
if (document.getElementById("eur").checked) {
    document.getElementById("eurLabel").style.border = "2px solid #18D988";
    document.getElementById("usdLabel").style.border = "2px solid #13160E";
}

function radioClick2() {
    document.getElementById("eurLabel").style.border = "2px solid #18D988";
    document.getElementById("usdLabel").style.border = "2px solid #13160E";
}

function radioClick1() {
    document.getElementById("usdLabel").style.border = "2px solid #18D988";
    document.getElementById("eurLabel").style.border = "2px solid #13160E";
}

$(function () {
    $(".form-select").click(function () {
        $(".form-select").toggleClass("form-select-active")
    });
    $(".form-select2").click(function () {
        $(".form-select2").toggleClass("form-select-active")
    });

});













