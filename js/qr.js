;
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qrTxt");

function generateQr() {
  if (qrTxt.value.length > 0) {
    qrImg.src =
      "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=200x200&chl=" +
      qrTxt.value;
    imgBox.classList.add("show-img");
  } else {
    qrTxt.classList.add('error');
    setTimeout(()=>{qrTxt.classList.remove('.error');},1000);
  }
}