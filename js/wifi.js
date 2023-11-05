;
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrName = document.getElementById("qrName");
let qrPw = document.getElementById("qrPw");

function generateQr() {
  if (qrName.value.length > 0 & qrPw.value.length > 0) {
    qrImg.src =
      "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=200x200&chl=" +
      "WIFI:S:" + qrName.value.trim() + ";T:WPA;P:" + qrPw.value.trim() + ";;";
    imgBox.classList.add("show-img");
  } else {
    qrTxt.classList.add('error');
    setTimeout(()=>{qrTxt.classList.remove('.error');},1000);
  }
}