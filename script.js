const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
qrimg = wrapper.querySelector(".qr-code img"),
generatebutton = wrapper.querySelector(".form button");

wrapper.addEventListener("click", () => {
    const qrValue = qrInput.value;
    if (!qrValue) return;
    generatebutton.innerText = "Generate QR Code...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active")
        generatebutton.innerText = "Generate QR Code";
    })

})


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active")
    }
})