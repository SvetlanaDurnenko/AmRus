var butScrol = document.getElementById("butScrol");
var formScrol = document.getElementById("formScrol");

butScrol.addEventListener("click", function () {
  formScrol.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  })
});

function checkForm() {
  var n = document.getElementById("lng-form-name").value;
  var templateName = /^[a-z, а-я, є-ї]{3,}/i;
  if (!templateName.test(n)) {
    document.getElementById("lng-form-name").style.border = "2px solid red";
    document.getElementById("nameMist").style.display = "inline";
    return false;
  } else {
    document.getElementById("lng-form-name").style.border = "2px solid #13160E";
    document.getElementById("nameMist").style.display = "none";
  }

  var numb = document.getElementById("phone").value;
  var templatePhone = /^\+380\d{9}$/;
  if (!templatePhone.test(numb)) {
    document.getElementById("phoneMist").style.display = "inline";
    document.getElementById("phone").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("phoneMist").style.display = "none";
    document.getElementById("phone").style.border = "2px solid #13160E";
  }
  return true;
}




$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 50000,
    values: [10000, 40000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0]);
      $(" #amount2").val("$" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0));
  $("#amount2").val("$" + $("#slider-range").slider("values", 1));
  $("#slider-range2").slider({
    range: true,
    min: 1979,
    max: 2022,
    values: [2000, 2019],
    slide: function (event, ui) {
      $("#amount3").val(ui.values[0]);
      $("#amount4").val(ui.values[1]);
    }
  });
  $("#amount3").val($("#slider-range2").slider("values", 0));
  $("#amount4").val($("#slider-range2").slider("values", 1));
  $(".form-select").click(function () {
    $(".form-select").toggleClass("form-select-active");
  });
  $(".form-select2").click(function () {
    $(".form-select2").toggleClass("form-select-active");
  });


  
});

