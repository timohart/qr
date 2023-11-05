;
function generateQRCode(){
  var startNode="BEGIN:VCARD"+"\n"+"VERSION:3.0"+"\n";
  var endNode="END:VCARD";

  startNode+="N:"+lastName.value.trim()+";"+firstName.value.trim()+"\n";
  startNode+="FN:"+firstName.value.trim()+" "+lastName.value.trim()+"\n";
  startNode+="EMAIL:"+email.value.trim()+"\n";
  startNode+="ORG:"+org.value.trim()+"\n";
  startNode+="TITLE:"+title.value.trim()+"\n";
  startNode+="NOTE:"+url.value.trim()+"\n";
  startNode+="URL:"+url.value.trim()+"\n";
  startNode+="TEL:"+phoneNo.value.trim()+"\n";
  startNode+="ADR:"+
    address1.value.trim()+";"+
    address2.value.trim()+";"+
    city.value.trim()+";"+
    state.value.trim()+";"+
    country.value.trim()+";"+
    zipCode.value.trim()+"\n";
  startNode+=endNode;

  this.qrImg.style.display ='none';
  this.qrImg.src=
    "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=200x200&chl="
    + encodeURIComponent(startNode);
  imgBox.classList.add("show-img");
  console.log(startNode);
  this.qrImg.style.display ='inline';
  this.vcard.value=startNode;
  this.vcard.style.display ='inline';
  this.vcardDiv.style.display ='inline';
  this.sampleQR.style.display ='none';
}