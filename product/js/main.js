let photo = document.getElementById("img-block");
let selectedImg = document.getElementById("selected-photo");
let mainPhoto = document.getElementById("main-photo");

photo.onclick = function (event) {
  let target = event.target;
  if (target.tagName != "IMG") {
    return;
  }
  opacity(target);
}

function opacity(img) {
  if (selectedImg) {
    selectedImg.classList.remove("opacity");
  }
  selectedImg = img;
  selectedImg.classList.add("opacity");
  mainPhoto.src = selectedImg.src;
}

function showForm() {
  document.getElementById("container").style.paddingBottom = "0";
  document.getElementById("form").style.display = "block";
  form.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  })
}

function showForm2() {
  document.getElementById("container").style.paddingBottom = "0";
  document.getElementById("form").style.display = "block";
  form.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  })
}

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



