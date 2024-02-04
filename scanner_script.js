const qrCodeReader = new Html5Qrcode("qr-reader");

// Get all buttons that should open the modal
const openModalButtons = document.querySelectorAll(".openModalButton");

// Get the modal
const modal = document.getElementById("scanModal");

// Get the <span> element that closes the modal
const closeModalSpan = document.querySelector(".close");

// When any button is clicked, open the modal
openModalButtons.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "block";
        startQRCodeScanner();
    });
});

// When the user clicks on <span> (x), close the modal
closeModalSpan.addEventListener("click", function() {
    modal.style.display = "none";
    stopQRCodeScanner();
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        stopQRCodeScanner();
    }
});

function startQRCodeScanner() {
    qrCodeReader.start(
        { facingMode: "environment" },  // Use the rear camera if available
        { fps: 10 },
        onScanSuccess
    );
}

function stopQRCodeScanner() {
    qrCodeReader.stop();
}

function onScanSuccess(qrCodeMessage) {
    // Play notification sound
    playNotificationSound();

    // Display the result
    displayResult(qrCodeMessage);

    // Extract URL from the QR code message
    const url = extractURL(qrCodeMessage);

    // Open the URL in the same tab
    if (url) {
        window.location.href = url;
    }
}

function playNotificationSound() {
    const audio = document.getElementById("notificationSound");
    audio.play();
}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Scanned QR Code: ${result}`;
}

function extractURL(qrCodeMessage) {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = qrCodeMessage.match(urlRegex);
    return match ? match[0] : null;
}

// Stop scanning when leaving the page
window.addEventListener("beforeunload", () => {
    qrCodeReader.stop();
});