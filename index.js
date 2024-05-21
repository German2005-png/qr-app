const imagen = document.getElementById("qr");
const formulario = document.querySelector(".cont-qr-form");
const input = document.getElementById("writing-qr");
const contenedorQR = document.getElementById("contenedor-qr");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    imagen.innerHTML = ``
    let QR = new QRCode(imagen, {
    text: input.value,
    width: 356,
    height: 356,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    })
});

window.addEventListener("load",(e)=>{
    e.preventDefault();
    imagen.innerHTML = ``
    let QR = new QRCode(imagen, {
    text: input.value,
    width: 356,
    height: 356,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    })
});

document.querySelector(".qr-btn-img").addEventListener("click", ()=>{
    var enlace = document.createElement("a");
    enlace.href = document.querySelector("img").src;
    enlace.download = `QR-${document.querySelector("#qr").title}`;
    document.body.appendChild(enlace);
    enlace.click();
    // document.removeChild(enlace);
})